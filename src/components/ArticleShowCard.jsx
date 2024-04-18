import React from 'react';
import { useState } from 'react';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import Comments from './Comments';
import Expander from './Expander';
import { patchArticle } from '../../apis';
import { useNavigate, Link } from 'react-router-dom';




const ArticleShowCard = ({article}) => {
    const [count, setCount] = useState(0)
    const { topic, votes, created_at, title, article_img_url, author, comment_count, article_id } = article;



  return (
    <article className= "article"> 
      <img className = "article-item article-img" src= {article_img_url} alt = {`An article about ${topic}`}  />
      <Link to = {`/articles/${article_id}`} className= "article-item article-heading"><h2 className='article-title'>{title} </h2></Link>
      <h3 className= 'article-item article-info'>Topic: <span className='article-topic-wrapper'>{topic}</span></h3>
       <p className = "article-item article-info">Written by: <span className = 'article-author'>{author}</span></p> 
    </article>

  );
};

export default ArticleShowCard;