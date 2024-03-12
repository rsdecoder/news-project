import React from 'react';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';

const CommentCard = ({comment}) => {
    let count = 0;
    const {comment_id, article_id, body, votes , author, created_at} = comment
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
            </div>
        </div>
    );
};

export default CommentCard;