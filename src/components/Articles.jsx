import React, { useEffect, useState } from 'react';
import { fetchArticles } from '../../apis';
import ArticleShowCard from './ArticleShowCard'; 
import RotateRightSharpIcon from '@mui/icons-material/RotateRightSharp';

const Articles = () => { 
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true)
        fetchArticles()
        .then(({articles}) => {
            setArticles(articles)
            setIsLoading(false)
        })
    }, [])

    if(isLoading) return <h1>Loading....</h1>
    
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