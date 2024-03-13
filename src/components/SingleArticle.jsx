import React from 'react';
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import  { fetchArticlesById }  from '../../apis';
import Comments from './Comments';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import Expander from './Expander';
import { patchArticle } from '../../apis';

const SingleArticle = () => {
    const {article_id} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [article, setArticle] = useState({})

    useEffect(() => {
        setIsLoading(true)
        fetchArticlesById(article_id)
        .then(({article}) => {
            setArticle(article)
            setIsLoading(false)
        })
    }, []);

    function upVote() {      
        setArticle((currArticle) => {
            return currArticle.map((article) => {
                return {...article, votes: article.votes + 1}
        })
    });
    const incVotes = 1
    patchArticle(article_id, incVotes).catch(err => console.log(err))
        
    }

    function downVote() {
        setArticle((currArticle) => {
            return currArticle.map((article) => { 
                return {...article, votes: article.votes - 1}
        })
    }); 
    const decVotes = -1;
    patchArticle(article_id, decVotes).catch(err => console.log(err))    
    }

    if (isLoading) return <h1 className='loader'>Loading....</h1>


    return (
        
        <div className="single-article-container">

            <h1 className ="">{article[0].title}</h1><br></br>
            <img className = "single-article-img" src = {article[0].article_img_url} alt = "image" width="500px"/>
            <article>
                <p><b>{article.body}</b></p><br></br>
            </article><br></br>
            <p><b>Written by:</b> <i>{article[0].author}</i></p>
            <p><b>Date created - </b>{article[0].created_at}</p>
            <section className = "vote-section">
                <div className = "vote">
                    <div className ="up-vote">
                    <button value = "up" className='button-vote' onClick = {upVote}><ThumbUpAltOutlinedIcon className ='vote-section-item'/></button>
                    </div>
                    <p className='vote-section-item vote-count'>{article[0].votes}</p>
                    <div className ="down-vote">
                        <button value = "down" className='button-vote' onClick = {downVote}><ThumbDownAltOutlinedIcon className ='vote-section-item'/></button>
                    </div>
                </div>
                <Expander className = "comments-expander">
                    <Comments articleId = {article_id}/>
                </Expander>
            </section>
        </div>
    );
};

export default SingleArticle;