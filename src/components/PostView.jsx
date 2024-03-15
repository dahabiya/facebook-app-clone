import React, { useEffect, useState } from 'react'
import '../styles/PostView.css'
import { Link, useParams } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";
import { CgMenuGridO, CgZoomIn } from "react-icons/cg";
import { BiZoomOut } from "react-icons/bi";
import { FiMaximize2 } from "react-icons/fi";
import { FaComment, FaFacebookMessenger, FaRegComment } from 'react-icons/fa';
import { IoNotifications } from 'react-icons/io5';
import { AiFillLike, AiOutlineLike } from 'react-icons/ai';
import { HiOutlineDotsHorizontal, HiUser } from 'react-icons/hi';
import { TbShare3 } from 'react-icons/tb';
import { LuSendHorizonal } from 'react-icons/lu';
import Mysvg from './Mysvg';

function PostView({ isLike}) {

    const [post, setPost] = useState([]);
    const [timeAgo, setTimeAgo] = useState('');
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');


    //const [isliked, setIsLiked] = useState(isLike);

    const { postId } = useParams();
    const token = sessionStorage.getItem('authToken');


    const iconStyle = {
        paddingLeft: '12px',
        paddingTop: '10px',
      };
      const iconStyle2 = {
        // paddingLeft: '4px',
        paddingTop: '20px',
      };
      const iconStyle3 = {
        // paddingLeft: '4px',
        paddingTop: '10px',
      }; 

      const iconStyle4 = {
        paddingLeft: '5px',
        paddingTop: '5px',
      };
      const iconStyle5 = {
        paddingLeft: '8px',
        paddingTop: '8px',
      };
      const iconStyle6 = {
        // paddingLeft: '4px',
        color: '#1aa3ff'
      };
      const iconStyle7 = {
        // paddingLeft: '4px',
        color: '#ff4d4d'
      };

      const iconStyle8 = {
        // paddingLeft: '4px',
        color: 'rgb(90, 86, 86)'
      };
      const iconStyle9 = {
        // paddingLeft: '4px',
        color: 'rgb(36, 104, 193)'
      };
      const iconStyle10 = {
        paddingLeft: '0px',
        paddingTop: '2px',
        color: 'white'
      };
      const iconStyle11 = {
        paddingLeft: '0px',
        paddingTop: '2px',
        color: 'white'
      };
      const iconStyle12 = {
        paddingTop: '8px',
        color: 'black'
      };
      const iconStyle13= {
        paddingLeft: '0px',
        paddingTop: '1px',
        color: 'white'
      };


  useEffect(() => {
    
    const fetchPosts = async () => {
      try {
        const response = await fetch(`https://academics.newtonschool.co/api/v1/facebook/post/${postId}`, {
          headers: {
            'Content-Type': 'application/json',
            'projectID': 'shxzzm8fbs7u'
          }
        });

        if (response.ok) {
          const data = await response.json();
      
          setPost(data.data);

          console.log(post);
          console.log(postAuthor);

        } else {
          console.error('Failed to fetch posts');
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, [ postId]);

  //fetch Likes..
  // const fetchLikes = async (postId) => {
  //   try {
  //     const response = await fetch(`https://academics.newtonschool.co/api/v1/facebook/like/${postId}`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${token}`,
  //         'projectID': 'shxzzm8fbs7u'
  //       }
  //     });
  //     const data = await response.json();
      
  //     setlike((prevLikes) => {
  //       const updatedLikes = data || [];
  //       console.log(updatedLikes); // Log the updated likes
  //       return updatedLikes;
        
  //     });
  //   } catch (error) {
  //     console.error(`Error fetching Likes`, error);
  //   }
  // };
  

//   const handleLikeClick = (postId) => {
//     fetchLikes(postId);
//     setIsLiked(!isliked);
//  }

  // useEffect(() => {
  //   if (post.createdAt) {
  //     calculateTimeAgo(post.createdAt);
  //   }
  // }, [post.createdAt]);


  // const calculateTimeAgo = (timestamp) => {
  //   const currentDate = new Date();
  //   const postDate = new Date(timestamp);

  //   const timeDifference = currentDate - postDate;
  //   const seconds = Math.floor(timeDifference / 1000);
  //   const minutes = Math.floor(seconds / 60);
  //   const hours = Math.floor(minutes / 60);
  //   const days = Math.floor(hours / 24);
  //   const months = Math.floor(days / 30);
  //   const years = Math.floor(days / 365);

  //   if (years > 0) {
  //     setTimeAgo(`${years} year${years > 1 ? 's' : ''} ago`);
  //   } else if (months > 0) {
  //     setTimeAgo(`${months} month${months > 1 ? 's' : ''} ago`);
  //   } else if (days > 0) {
  //     setTimeAgo(`${days} day${days > 1 ? 's' : ''} ago`);
  //   } else if (hours > 0) {
  //     setTimeAgo(`${hours} hour${hours > 1 ? 's' : ''} ago`);
  //   } else if (minutes > 0) {
  //     setTimeAgo(`${minutes} minute${minutes > 1 ? 's' : ''} ago`);
  //   } else {
  //     setTimeAgo('Just now');
  //   }
  // };
  
  //fetch comments

  const handleViewComment = async () => {
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
      console.log("comments",comments);

    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  useEffect(() => {
    handleViewComment();
  }, [postId]);
  
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
  

  return (
    <div className='postview-container'>
        <div className='main-container'>
            <div><Link to="/homepage"  className='postview-link'><RxCross2 size={27} style={iconStyle}/></Link></div>
            <div><Link to="/homepage">
              <Mysvg/>
              {/* <MySvgComponent style={iconStyle2}/> */}
              </Link></div>
            <img src={post.images} className='postview-img' />
            <div><BiZoomOut  size={18} style={iconStyle3}/></div>
            <div><CgZoomIn  size={18} style={iconStyle3}/></div>
            <div><FiMaximize2  size={18} style={iconStyle3}/></div>
        </div>

        <div className='side-container'>

            <div  className='sidenav-container'>
            <div></div>
            <div className='sidenav-logo'><CgMenuGridO size={29} style={iconStyle4}/></div>
            <div className='sidenav-logo'><FaFacebookMessenger size={24} style={iconStyle5}/></div>
            <div className='sidenav-logo'> <IoNotifications size={24} style={iconStyle5}/></div>
            </div>

            <div className='profileview-line'></div>
             
            {post.author && 
             <div className='postview-container-profile'>
               {post.author.profileImage? <img className='postview-profile-img' src={post.author.profileImage} />
               : <div className="postview-authr-icn"><HiUser size={38} style={iconStyle13}/></div>}  
               
             <div className='postview-author-time'> 
                 <div className='postview-profile-author'>{post.author.name}</div>
                 <p className='postview-profile-time'>{timeAgo}</p>
           </div>
           <div><HiOutlineDotsHorizontal  size={24} /></div>

            </div> }


            <div className='pv-reactions-container'>
            {/* <div className='count'>
                <div className='like-count'>&nbsp;&nbsp;&nbsp;<AiFillLike size={20} style={iconStyle6}/>
                <span className='span-pad'>{post.likeCount}</span></div> &nbsp;
                <div className='comment-count'><FaComment size={19} style={iconStyle7}/>&nbsp;
                <span  className='span-pad'>{post.commentCount}</span></div>
            </div> */}
              
              <div className='pv-reactions'>

              <button className='pv-reactions-btn'>
               <div className='pv-reactions-icon'>
               <AiOutlineLike  size={24.5} style={iconStyle8}/></div>
               <div className='pv-reactions-text text-color2'>Like</div>
               </button>
              
              {/* {isliked?
               <button className='pv-reactions-btn'  onClick={() => handleLikeClick(post._id)}>
               <div className='pv-reactions-icon'>
               <AiOutlineLike  size={24.5} style={iconStyle9}/></div>
               <div className='pv-reactions-text  text-color1'>Like</div>
               </button>
               :
               <button className='pv-reactions-btn'  onClick={() => handleLikeClick(post._id)}>
               <div className='pv-reactions-icon'>
               <AiOutlineLike  size={24.5} style={iconStyle8}/></div>
               <div className='pv-reactions-text text-color2'>Like</div>
               </button>
              } */}
             
              <button className='pv-reactions-btn'>
              <div className='pv-reactions-icon'>
              <FaRegComment  size={23} style={iconStyle8}/></div>
              <div className='reactions-text'>Comment</div>
              </button>

              <button className='pv-reactions-btn'>
              <div className='pv-reactions-icon'>
              <TbShare3  size={24} style={iconStyle8}/></div>
              <div className='pv-reactions-text'>share</div>
              </button>
           </div>
            </div>

            {comments.length > 0 && (
                  <div className='pv-comments-container'>
                  {comments.map((comment) => (
                    <div className='pv-users-cmmnts-container' key={comment._id}> 
                    <div className='pv-users-cmmnts-profile'><HiUser size={29} style={iconStyle10} /></div>
                    <div className='pv-users-cmmnts'>{comment.content}</div>
                </div>
                 ))}
                   
                </div>
              )}

                 <div className='profileview-line2'></div>

                <div className='pv-comments-container'> 

                <div className='pv-login-user-cmmnts-container'> 
                    <div className='pv-login-user-profile'><HiUser size={29} style={iconStyle11} /></div>
                    <div className='pv-login-user-create-cmmnt'>
                       <input 
                           type="text" 
                           placeholder='Write a comment..'
                           value={newComment}
                           className='pv-login-user-create-cmmnt-inpt'
                           onChange={(e) => setNewComment(e.target.value)}
                       />

                      <button 
                           className='pv-login-user-create-cmmnt-btn'
                           onClick={() => handleAddComment(post._id)}>
                            <LuSendHorizonal  size={22} style={iconStyle12}/>
                      </button>

                    </div>
                </div>
              </div>

              <div className='profileview-line3'></div>

        </div>
    </div>
  )
}

export default PostView