import React from 'react';
import { useState } from 'react';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ForumSharpIcon from '@mui/icons-material/ForumSharp';
import { Link } from 'react-router-dom';


const ArticleShowCard = ({article}) => {
    const [count, setCount] = useState(0)
  const { topic, title, article_img_url, author, comment_count } = article;

  return (
    <article className= "article"> 
    <Link to ="/article" className="article-item"><h2>{title}</h2></Link>
      <p clasName = "article-item" className="article-author">Written by: {author}</p> 
      <img clasName = "article-item" src= {article_img_url} width= "100px" height= "100px" alt = {`An article about ${topic}`}  />
      <div className= "vote-section">
        <div className ="up-vote">
            <ThumbUpAltOutlinedIcon className ='vote-section--item'/>
            <p className ='vote-section--item'>{count}</p>
        </div>
        <div className ="down-vote">
            <ThumbDownAltOutlinedIcon className ='vote-section-item'/>
            <p className ='vote-section--item'>{count}</p>
        </div>
        <div className='comments'>
            <ForumSharpIcon/>
            <p>{comment_count}</p>
        </div>
      </div> 
    </article>
  );
};

export default ArticleShowCard;