import React from 'react';
import { useState } from 'react';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ForumSharpIcon from '@mui/icons-material/ForumSharp';
import { useNavigate, Link } from 'react-router-dom';


const ArticleShowCard = ({article}) => {
    const [count, setCount] = useState(0)
    const { topic, votes, created_at, title, article_img_url, author, comment_count, article_id } = article;




  return (
    <article className= "article"> 
      <Link to = {`/articles/${article_id}`} className= "article-item article-heading"><h3>{title} </h3></Link>
      <img className = "article-item" src= {article_img_url} width= "100px" height= "100px" alt = {`An article about ${topic}`}  />
      <p>Article about {topic}</p>
      <p className = "article-item">Written by: <b>{author}</b></p> 
      <div className= "rating article-item">
        <div className = "vote">
            <div className ="up-vote">
                <ThumbUpAltOutlinedIcon className ='vote-section-item'/>
                <p className ='vote-section-item'>{count}</p>
            </div>
            <div className ="down-vote">
                <ThumbDownAltOutlinedIcon className ='vote-section-item'/>
                <p className ='vote-section-item'>{count}</p>
            </div>

        </div>
        <div className='comments'>
            <ForumSharpIcon className ='vote-section-item'/>
            <p className ='vote-section-item'>{comment_count}</p>
        </div>
      </div> 
    </article>
  );
};

export default ArticleShowCard;