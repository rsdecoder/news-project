import React, { useEffect, useState } from 'react';
import { fetchArticles, fetchArticlesByTopic } from '../../apis';

import ArticleShowCard from './ArticleShowCard'; 
import RotateRightSharpIcon from '@mui/icons-material/RotateRightSharp';
import { useSearchParams } from 'react-router-dom';


const Articles = () => { 
    const [isLoading, setIsLoading] = useState(true);
    const [articles, setArticles] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();
    
    const topicQuery = searchParams.get("topic");

    useEffect(() => {
        setIsLoading(true);
        fetchArticles(topicQuery)
        .then(({articles}) => {
            setArticles(articles)
            setIsLoading(false);
        })
    }, [topicQuery])



    if(isLoading) {
        return <h1 className='loader'>Loading....<RotateRightSharpIcon /></h1>
    } 
    
    return (
        <div id = 'articles'>
            <ul>
                {articles.map((article) => {  
                     return <ArticleShowCard article = {article} key = {article.article_id}/>
                })}
            </ul>
            
        </div>
    );
};

export default Articles;