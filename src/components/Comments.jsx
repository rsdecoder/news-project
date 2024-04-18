import React, { useEffect, useState } from 'react';
import { fetchAllComments } from '../../apis';
import CommentCard from './CommentCard';
import CommentAdder from './CommentAdder';
import { Comment, ProgressBar } from 'react-loader-spinner';


const Comments = ({articleId}) => {
    const [err, setErr] = useState(null)
    const [isLoading, setIsLoading] = useState(true);
    const [comments, setComments] =  useState([])

    useEffect(()=> {
        setIsLoading(true)
        fetchAllComments(articleId)
        .then(({comments}) => {
            setComments(comments)
            setIsLoading(false)
        })
    }, [setComments])


    // if (isLoading) {
    //     return(<ProgressBar
    //     visible={true}
    //     height="80"
    //     width="80"
    //     color="#4fa94d"
    //     borderColor='rgb(63, 80, 138)'
    //     ariaLabel="progress-bar-loading"
    //     wrapperStyle={{}}
    //     wrapperClass="progressBar"
    //     />)
    // }

    if (isLoading) {
        return(<Comment
            visible={true}
            height="80"
            width='80'
            ariaLabel="comment-loading"
            wrapperStyle={{}}
            wrapperClass="comment-wrapper"
            color="#fff"
            backgroundColor="rgb(53, 85, 190)"
            />)
    }

    return (
        
        <div className = "comments-section-container">
            <CommentAdder setComments = {setComments} articleId = {articleId}/>
            {comments.map((comment, index) => {
                return <CommentCard comment = {comment} setComments = {setComments} className = "comment-items" key = {index}/>
            })}  
        </div>
    );
};

export default Comments;