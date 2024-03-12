import React, { useEffect, useState } from 'react';
import { fetchAllComments } from '../../apis';
import CommentCard from './CommentCard';

const Comments = ({articleId}) => {
    const [articleComment, setArticleComment] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const [comments, setComments] =  useState([])

    useEffect(()=> {
        setIsLoading(true)
        fetchAllComments(articleId)
        .then(({comments}) => {
            setComments(comments)
            setIsLoading(false)
        })
    }, [])
    if(isLoading) return <h1>Loading...</h1>
    return (
        <div className = "comment-body">
            <h3 className = "comment-items">Comments: </h3>
            {comments.map((comment) => {
                return <CommentCard comment = {comment} className = "comment-items"/>
            })}
            
        </div>
    );
};

export default Comments;