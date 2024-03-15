import React, { useEffect, useState } from 'react'
import Post from './Post';

function PostList() {
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://academics.newtonschool.co/api/v1/facebook/post?limit=100', {
          headers: {
            'Content-Type': 'application/json',
            'projectID': 'shxzzm8fbs7u'
          }
        });

        if (response.ok) {
          const data = await response.json();
      
          setPosts(data.data);
        } else {
          console.error('Failed to fetch posts');
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
}

export default PostList