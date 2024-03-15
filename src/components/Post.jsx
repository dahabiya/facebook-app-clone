import React, { useEffect, useState } from 'react'
import '../styles/Post.css'

import { HiOutlineDotsHorizontal, HiUser } from "react-icons/hi";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { TbShare3 } from "react-icons/tb";
import { FaComment } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { LuSendHorizonal } from "react-icons/lu";

function Post({ post }) {


    const [timeAgo, setTimeAgo] = useState('');

    const [isliked, setIsLiked] = useState(false);

    const [comments, setComments] = useState([]);
    const [showComments, setShowComments] = useState(false);
    const [newComment, setNewComment] = useState('');

    const token = sessionStorage.getItem('authToken');


  
  
    const fetchLikes = async (postId) => {
      try {
        const response = await fetch(`https://academics.newtonschool.co/api/v1/facebook/like/${postId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'projectID': 'shxzzm8fbs7u'
          }
        });
        const data = await response.json();
        
        setlike((prevLikes) => {
          const updatedLikes = data || [];
          console.log(updatedLikes); // Log the updated likes
          return updatedLikes;
          
        });
      } catch (error) {
        console.error(`Error fetching Likes`, error);
      }
    };
    
    const handleAddComment = async (postId) => {
      try {
        const response = await fetch(`https://academics.newtonschool.co/api/v1/facebook/comment/${postId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'projectID': 'shxzzm8fbs7u'
          },
          body: JSON.stringify({
            'content': newComment
          })
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        // Assuming the response contains the newly added comment
        const addedComment = data.data;
  
        setComments((prevComments) => [...prevComments, addedComment]);
        setNewComment(''); // Clear the input field after adding the comment
      } catch (error) {
        console.error('Error adding comment:', error);
      }
    };

    const handleViewComment = async (postId) => {
      try {
        // Replace 'YOUR_JWT_TOKEN' and 'YOUR_PROJECT_ID' with actual values
        const response = await fetch(`https://academics.newtonschool.co/api/v1/facebook/post/${postId}/comments`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'projectID': 'shxzzm8fbs7u'
          }
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
  
        // Assuming the response contains an array of comments
        setComments(data.data);
        console.log(comments);
  
        // Show the comments div
        setShowComments(!showComments);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };


    const handleLikeClick = (postId) => {
       fetchLikes(postId);
       setIsLiked(!isliked);
    }

    const iconStyle = {
        // paddingLeft: '4px',
        // paddingTop: '8px',
        color: 'rgb(116, 116, 116)'
      };

      const iconStyle2 = {
        // paddingLeft: '4px',
        color: '#1aa3ff'
      };
      const iconStyle3 = {
        // paddingLeft: '4px',
        color: '#ff4d4d'
      };

      const iconStyle4 = {
        // paddingLeft: '4px',
        color: 'rgb(90, 86, 86)'
      };
      const iconStyle5 = {
        // paddingLeft: '4px',
        color: 'rgb(36, 104, 193)'
      };
      const iconStyle6 = {
        paddingLeft: '0px',
        paddingTop: '2px',
        color: 'white'
      };
      const iconStyle7 = {
        paddingTop: '8px',
        color: 'black'
      };
      const iconStyle8 = {
        paddingLeft: '0px',
        paddingTop: '1px',
        color: 'white'
      };



    const calculateTimeAgo = (timestamp) => {
        const currentDate = new Date();
        const postDate = new Date(timestamp);
    
        const timeDifference = currentDate - postDate;
        const seconds = Math.floor(timeDifference / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const months = Math.floor(days / 30);
        const years = Math.floor(days / 365);
    
        if (years > 0) {
          setTimeAgo(`${years} year${years > 1 ? 's' : ''} ago`);
        } else if (months > 0) {
          setTimeAgo(`${months} month${months > 1 ? 's' : ''} ago`);
        } else if (days > 0) {
          setTimeAgo(`${days} day${days > 1 ? 's' : ''} ago`);
        } else if (hours > 0) {
          setTimeAgo(`${hours} hour${hours > 1 ? 's' : ''} ago`);
        } else if (minutes > 0) {
          setTimeAgo(`${minutes} minute${minutes > 1 ? 's' : ''} ago`);
        } else {
          setTimeAgo('Just now');
        }
      };
      useEffect(() => {
        calculateTimeAgo(post.createdAt);
      }, []);


  return (
    <div className='Post-container'> 
           <div className='Post-container-profile'>
            {post.author.profileImage? <img className='post-profile-img' src={post.author.profileImage} />
            :<div className='icon-div'> <HiUser size={38} style={iconStyle8}/></div>}           
           <div className='author-time'> 
              <div className='post-profile-author'>{post.author.name}</div>
              <p className='post-profile-time'>{timeAgo}</p>
           </div>
           <div><HiOutlineDotsHorizontal  size={24} style={iconStyle}/></div>
           </div>
           <div className='post-content'>{post.content}</div>
               <Link to={`/post/${post._id}`} state={{ isliked }}>
               <img src={ post.images instanceof File ? URL.createObjectURL(image) : post.images} className='post-img' /> 
               </Link> 
            <div className='reactions-container'>

            {/* <div className='count'>
                <div className='like-count'>&nbsp;&nbsp;&nbsp;<AiFillLike size={20} style={iconStyle2}/>
                <span className='span-pad'>{post.likeCount}</span></div> &nbsp;
                <div className='comment-count'><FaComment size={19} style={iconStyle3}/>&nbsp;
                <span  className='span-pad'>{post.commentCount}</span></div>
            </div> */}

            <div className='line3'></div>
            <div className='reactions'>
              
              {isliked?
               <button className='reactions-btn'  onClick={() => handleLikeClick(post._id)}>
               <div className='reactions-icon'>
               <AiOutlineLike  size={24.5} style={iconStyle5}/></div>
               <div className='reactions-text  text-color1'>Like</div>
               </button>
               :
               <button className='reactions-btn'  onClick={() => handleLikeClick(post._id)}>
               <div className='reactions-icon'>
               <AiOutlineLike  size={24.5} style={iconStyle4}/></div>
               <div className='reactions-text text-color2'>Like</div>
               </button>
              }
             
              <button className='reactions-btn'onClick={() => handleViewComment(post._id)}>
              <div className='reactions-icon'>
              <FaRegComment  size={23} style={iconStyle4}/></div>
              <div className='reactions-text'>Comment</div>
              </button>

              <button className='reactions-btn'>
              <div className='reactions-icon'>
              <TbShare3  size={24} style={iconStyle4}/></div>
              <div className='reactions-text'>share</div>
              </button>
           </div>

           {showComments &&  comments.length > 0 && (
                  <div className='comments-container'>
                  {comments.map((comment) => (
                    <div className='users-cmmnts-container' key={comment._id}> 
                    <div className='users-cmmnts-profile'><HiUser size={29} style={iconStyle6} /></div>
                    <div className='users-cmmnts'>{comment.content}</div>
                </div>
                 ))}
                   
                </div>
              )}

           {showComments &&(
                <div className='comments-container'> 
                 
                   {/* <div className='users-cmmnts-container'> 
                   <div className='users-cmmnts-profile'><HiUser size={29} style={iconStyle6} /></div>
                   <div className='users-cmmnts'>cmmnts are appeared here you can give as many number of comments herre.</div>
               </div> */}

                  <div className='login-user-cmmnts-container'> 
                      <div className='login-user-profile'><HiUser size={29} style={iconStyle6} /></div>
                      <div className='login-user-create-cmmnt'>
                         <input 
                             type="text" 
                             placeholder='Write a comment..'
                             value={newComment}
                             className='login-user-create-cmmnt-inpt'
                             onChange={(e) => setNewComment(e.target.value)}
                         />

                        <button 
                             className='login-user-create-cmmnt-btn'
                             onClick={() => handleAddComment(post._id)}>
                              <LuSendHorizonal  size={22} style={iconStyle7}/>
                        </button>

                      </div>
                  </div>
                </div>
              )}

           </div>
        </div>
  )
}

export default Post