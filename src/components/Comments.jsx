import React, { useEffect, useState } from 'react';
import { fetchAllComments } from '../../apis';
import CommentCard from './CommentCard';
import CommentAdder from './CommentAdder';


const Comments = ({articleId}) => {
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
            <CommentAdder setComments = {setComments} articleId = {articleId}/>
            <ul className='comment-list'>
            {comments.map((comment, index) => {
                return <CommentCard comment = {comment} className = "comment-items" key = {index}/>
            })}
            </ul>

            
        </div>
    );
};

export default Comments;