import React from 'react';
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import  { fetchArticlesById }  from '../../apis';
import Comments from './Comments';

const SingleArticle = () => {
    const {article_id} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [article, setArticle] = useState({})
    useEffect(() => {
        setIsLoading(true)
        fetchArticlesById(article_id)
        .then(({article}) => {
            setArticle(article[0])
            setIsLoading(false)
        })
    }, [])
    if(isLoading) return <h1>Loading...</h1>
    return (
        <div className="single-article-container">
            <h1 className ="">{article.title}</h1><br></br>
            <img className = "single-article-img" src = {article.article_img_url} alt = "image" width="500px"/>
            <article>
                <p><b>{article.body}</b></p><br></br>
            </article><br></br>
            <p><b>Written by:</b> <i>{article.author}</i></p>
            <p><b>Date created - </b>{article.created_at}</p>
            <div>
                <Comments articleId = {article_id}/>
            </div>
        </div>
    );
};

export default SingleArticle;