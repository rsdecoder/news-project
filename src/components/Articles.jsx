import React, { useEffect, useState } from 'react';
import { fetchArticles } from '../../apis';
import ArticleShowCard from './ArticleShowCard'; 
import RotateRightSharpIcon from '@mui/icons-material/RotateRightSharp';

const Articles = () => { 
    const [isLoading, setIsLoading] = useState(true);
    const [articles, setArticles] = useState([])

    useEffect(() => {
        setIsLoading(true);
        fetchArticles()
        .then(({articles}) => {
            setArticles(articles)
            setIsLoading(false);
        })
    }, [])

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