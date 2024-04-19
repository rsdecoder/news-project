import React from 'react';
import { Link } from 'react-router-dom';
import StarsIcon from '@mui/icons-material/Stars';
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';
import CommentIcon from '@mui/icons-material/Comment';

const ArticleShowCard = ({article}) => {
    const { topic, votes, created_at, title, article_img_url, author, comment_count, article_id } = article;



  return (
    <article className= "article"> 
      <img className = "article-item article-img" src= {article_img_url} alt = {`An article about ${topic}`}  />
      <Link to = {`/articles/${article_id}`} className= "article-item article-heading"><p className='article-title'>{title} </p></Link>
      <h3 className= 'article-item article-info'>Topic: <span className='article-topic-wrapper'>{topic}</span></h3>
       <p className = "article-item article-info">Written by: <span className = 'article-author'>{author}</span></p> 
       <div className='article-item article-sort-section'>
          <div className='article-sub-section'>
            <StarsIcon className='article-rating-icon'/>
            <p className='article-votes'>{votes}</p>
          </div>
          <div className='article-sub-section'>
            <CommentIcon className='article-comment-icon'/>
            <p className='article-comment-count'>{comment_count}</p>
          </div>
          
          <p>{created_at}</p>
        </div>
    </article>

  );
};

export default ArticleShowCard;