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
            comments.forEach((comment) => {
                if(Number(comment.article_id) === Number(articleId)){
                    setArticleComment({...comment})
                }
            })
            setIsLoading(false)
        })
    }, [])
    if(isLoading) return <h1>Loading...</h1>
    return (
        <div className = "comment-body">
            <h3 className = "comment-items">Comments: </h3>
             <CommentCard comment = {articleComment} className = "comment-items"/>
        </div>
    );
};

export default Comments;