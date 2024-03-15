import React, { createContext, useState, useContext } from 'react';

const SearchContext = createContext();

export const useSearch = () => {
  return useContext(SearchContext);
};

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (searchTerm) => {
    try {
      const response = await fetch(`https://academics.newtonschool.co/api/v1/facebook/post?search={"content":"${searchTerm}"}`, {
        headers: {
          'projectID': 'shxzzm8fbs7u'
        }
      });
      const data = await response.json();
      setSearchResults(data.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleChange = (searchTerm) => {
    setSearchTerm(searchTerm);
    handleSearch(searchTerm);
  };

  return (
    <SearchContext.Provider value={{ searchTerm, searchResults, handleChange }}>
      {children}
    </SearchContext.Provider>
  );
};
