import React, { useState } from 'react'
import Navbar from './Navbar'
import '../styles/CreateNewPost.css'
import { useNavigate } from 'react-router-dom';

function CreateNewPost() {
    const [postTitle, setPostTitle] = useState('');
    const [postContent, setPostContent] = useState('');
    const [postImage, setPostImage] = useState(null);

    const token = sessionStorage.getItem('authToken');
    let loginUsername = sessionStorage.getItem('userInfo');
    const navigate = useNavigate();
  
    const handleTitleChange = (e) => {
      setPostTitle(e.target.value);
    };
  
    const handleContentChange = (e) => {
      setPostContent(e.target.value);
    };
  
    const handleImageChange = (e) => {
      
      setPostImage(e.target.files[0]);
    };
  
    const handlePostCreation = async () => {
      try {
        const formData = new FormData();

        formData.append('title', postTitle);
        formData.append('content', postContent);

        // if (postImage.length > 0) {
        //     postImage.forEach((image) => {
        //         formData.append('images', image);
        //     });
        // }

        if (postImage) { // Check if an image is selected
          formData.append('images', postImage);
        }
        
        // formData.append('content', postContent);
        // formData.append('images', postImage);
        console.log(postImage);
  
        const response = await fetch('https://academics.newtonschool.co/api/v1/facebook/post/', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            // 'Content-Type': 'multipart/form-data',
            'projectID': 'shxzzm8fbs7u'
          },
          body: formData,
        });
  
        if (response.ok) {
          // Post created successfully
          console.log('Post created successfully');
          alert("Post Created");
          navigate('/homepage');          
        } else {
          // Handle error
          console.error('Error creating post');
          alert("Error creating post");
        }
      } catch (error) {
        console.error('Error creating post', error);
        alert("Error creating postd");
      }
    };
  
    return (
      <div>
        <Navbar/>
        <div className='create-post-container'>
        <div className='create-post-head'>Create post</div>
            <div className='create-post-inputs'>
            <input 
                type="text" 
                value={postTitle} 
                onChange={handleTitleChange} 
                placeholder='Post title'
                className='create-post-inputs-field'
                required/>
            <textarea 
                 value={postContent} 
                 onChange={handleContentChange} 
                 placeholder={`What's on your mind, ${loginUsername.substring(1, loginUsername.length - 1)}?`}
                 className='create-post-inputs-field  text-area'
                 required/>
            <div className='insert-image'> Insert Image &nbsp;
            <input type="file" accept="image/*" onChange={handleImageChange} required/>
            </div>
           <button className='create-post-btn' onClick={handlePostCreation}> Create post</button>
           </div>
        </div>
      </div>
    );
}
  

export default CreateNewPost