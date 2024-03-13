import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../contexts/User';
import { useContext } from 'react';
import { postComment } from '../../apis';



const CommentAdder = ({setComments, articleId}) => {
    const navigate = useNavigate()
    const[isLoading, setIsLoading] =  useState(false)
    const [isShowing,setIsShowing] = useState(false)
    const [writeComment, setWriteComment] = useState("")
    const {loggedInUser} = useContext(UserContext)

    function handleSubmit(event) {
        setIsLoading(true)
        event.preventDefault()
        postComment(articleId, loggedInUser.username, writeComment)
        .then((newcommentFromapi) => {
            setWriteComment("")
            setComments((currComments) => {
                    return [newcommentFromapi, ...currComments]
                })
            })
            setIsLoading(false)

    }  
    

    function togglecontent() {
        if(isShowing) {
            return (
                <form id="form-submit" className='comment-items' onSubmit = {handleSubmit}>
                <label htmlFor = "comment"></label>
                <input value={writeComment} id = 'comment' placeholder = "Leave a comment" className='comment-box comment-items' onChange = {(event) => setWriteComment(event.target.value)}></input>
                <input type='submit' className='comment-items submit-button'></input>
            </form>
            )
        }
        else {
            return null;
        }
    }
    function handleClick() {
        
        if(loggedInUser.username === 'strongbuddy'){
            alert("user login required")
            navigate('/users');
            navigate(`/articles/${articleId}`);
        } 
        else {
            setIsShowing((currShowing) => {
                return !currShowing
            })
            togglecontent()
            navigate(`/articles/${articleId}`)
            
        }

    }

    if(isLoading) return <h1>Loading....</h1>
    return (
        <div className='new-comment-box'>
            <button value = {writeComment} id="comments" className = "comment-items comment-add-button" onClick = {handleClick}>Add a comment </button>
            {togglecontent()}
        </div>
    );
};

export default CommentAdder;