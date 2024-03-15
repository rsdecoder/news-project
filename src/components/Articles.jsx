import React, { useEffect, useState } from 'react';
import { fetchArticles} from '../../apis';
import ArticleShowCard from './ArticleShowCard'; 
import RotateRightSharpIcon from '@mui/icons-material/RotateRightSharp';
import { Link, useSearchParams } from 'react-router-dom';
import ErrorPage from './ErrorPage';




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
        return <h1 className='loader'>Loading....<RotateRightSharpIcon /></h1>
    } 
    
    return (
        <div id = 'articles'>
            <div className= 'sort-articles'>
                <label htmlFor="sort_by">Sort By </label>
                <select id = 'sort_by' value = {sortBy} onChange = {(event) => {setSortBy(event.target.value)}}>
                    <option value = "created_at" >Date</option>
                    <option value = 'comment_count'>comment count</option>
                    <option value = 'votes'>votes</option> 
                </select> 
                <label htmlFor="order_by"> Order By </label>
                <select id =  'order_by' value = {orderBy} onChange = {(event) => {setOrderBy(event.target.value)}}>
                    <option value = 'desc'>Desc</option>
                    <option value = 'asc'>Asc</option>
                </select>
            </div>
            <ul>
                {articles.map((article) => {  
                     return <ArticleShowCard article = {article} key = {article.article_id}/>
                })}
            </ul>
            
        </div>
    );
};

export default Articles;