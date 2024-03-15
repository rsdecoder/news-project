import React from 'react';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import { deleteComment } from '../../apis';
import { useContext } from 'react';
import UserContext from '../contexts/User';


const CommentCard = ({comment, setComments}) => {
    let count = 0;
    const {loggedInUser} = useContext(UserContext)
    const {comment_id, article_id, body, votes , author, created_at} = comment

    function handleClick(event) {
        const commentId = event.target.value;
        if(loggedInUser.username === author ) {
            deleteComment(event.target.value).then(() => {
                alert("Comment deleted")
                setComments((currComments) => {
                    const commentsToKeep = currComments.filter((currcomment) => {
                        return currcomment.comment_id !== Number(commentId) })
                    return commentsToKeep;
            }) 
            }).catch((err) => {
                alert("something went wrong! please try again!")
                setComments((currComments) => {
                    return currComments;
            })
            
            })
            
            
        }
        else {
            alert("Not authenticated user! Please login to delete your comment!")  
        }
           
    }





    return (
        
        <div className = "comment-body-container"> 
            <div className= "comment-container">
                <h4 className = "comment-body-item"><span className= "comment-heading"><em>{author}</em></span> </h4>
                <p className = "comment-body-item comment">{body}</p>
                <p className = "comment-body-item time-stamp"><span className="grey">Time-stamp: {created_at}</span></p>
            </div>
            <div className = "vote">
                <div className ="up-vote">
                    <ThumbUpAltOutlinedIcon className ='vote-section-item'/>
                    <p className ='vote-section-item'>{votes}</p>
                </div>
                <div className ="down-vote">
                    <ThumbDownAltOutlinedIcon className ='vote-section-item'/>
                    <p className ='vote-section-item'>{count}</p>
                </div>
                <button value = {comment_id} className='delete-button' disabled= {false} onClick = {handleClick}>Delete comment</button>
            </div>
        </div>
    );
};

export default CommentCard;