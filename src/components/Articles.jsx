import React, { useEffect, useState } from 'react';
import { fetchArticles} from '../../apis';
import ArticleShowCard from './ArticleShowCard'; 
import { Link, useSearchParams } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import { ThreeDots } from 'react-loader-spinner';




const Articles = () => { 
    const [isLoading, setIsLoading] = useState(true);
    const [err, setErr] = useState(null)
    const [articles, setArticles] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();
    const [sortBy, setSortBy] = useState('created_at')
    const [orderBy, setOrderBy] = useState('desc')

    const topicQuery = searchParams.get("topic");

    useEffect(() => {
        setIsLoading(true);
        fetchArticles(topicQuery, sortBy, orderBy)
        .then(({articles}) => {
            setArticles(articles)
            setIsLoading(false);
        }).catch((err) => {
            const {msg}= err.response.data
            setErr(msg)
        })
    }, [topicQuery, sortBy, orderBy])
    

    if(err) return <ErrorPage error = {err}/>
    if(isLoading) {
        return (
            <ThreeDots
            visible={true}
            height= "30%"
            width="30%"
            color="#4fa94d"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass="spinner-icon"
            />)
    } 
    
    return (
        <div id = 'article-page'>
            <p className= {topicQuery? 'articles-sorted-heading': 'not-articles-sorted-heading'}>{topicQuery? `Articles related to ${topicQuery}`: null}</p>
            <div className= 'sort-articles'>
                <div className = "sort-section">
                    <label htmlFor="sort_by" className='sort-articles-item'>Sort By<span className='second-word-formatting'></span></label>
                    <select id = 'sort_by'className='sort-articles-item' value = {sortBy} onChange = {(event) => {setSortBy(event.target.value)}}>
                        <option value = "created_at" >Date</option>
                        <option value = 'comment_count'>comment count</option>
                        <option value = 'votes'>votes</option> 
                    </select>
                </div>
                <div className = "sort-section">
                    <label htmlFor="order_by" className='sort-articles-item'> Order By<span className='second-word-formatting'></span></label>
                    <select id =  'order_by' className='sort-articles-item'value = {orderBy} onChange = {(event) => {setOrderBy(event.target.value)}}>
                        <option value = 'desc'>Desc{" "}</option>
                        <option value = 'asc'>Asc {" "}</option>
                    </select>
                </div>
            </div>
            <div className = 'articles-container'>
                {articles.map((article) => {  
                     return <ArticleShowCard article = {article} key = {article.article_id}/>
                })}
            </div>        
        </div>
    );
};

export default Articles;