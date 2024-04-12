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
    const [updatedVotes, setUpdatedVotes] = useState(votes);


    function upVote() {
        
      setUpdatedVotes((currVotes) => {
        return currVotes + 1
      })
      const incVotes = 1
      patchArticle(article_id, incVotes).catch((err) => {
            console.log(err);
            setUpdatedVotes((currVotes) => {
              return currVotes -1
            })         
        });
        
  }

  function downVote() {
        
    setUpdatedVotes((currVotes) => {
      return currVotes - 1
    })
    const decVotes = -1
    patchArticle(article_id, decVotes).catch((err) => {
      console.log(err);
      setUpdatedVotes((currVotes) => {
        return currVotes +1
      })         
  });
      
}

  return (
    <article className= "article"> 
      <img className = "article-item article-img" src= {article_img_url} alt = {`An article about ${topic}`}  />
      <Link to = {`/articles/${article_id}`} className= "article-item article-heading"><h2>{title} </h2></Link>
      <h3 className= 'article-item article-info'>Topic: <span className='article-topic-wrapper'>{topic}</span></h3>
       <p className = "article-item article-info">Written by: <b>{author}</b></p> 
      { /*<div className= "rating article-item">
        <div className = "vote">
            <div className ="up-vote">
                <button className= "button-vote" onClick = {upVote}><ThumbUpAltOutlinedIcon className ='vote-section-item'/></button>
            </div>
            <p className='vote-section-item vote-count'>{updatedVotes}</p>
            <div className ="down-vote">
                <button className= "button-vote" onClick = {downVote}><ThumbDownAltOutlinedIcon className ='vote-section-item'/></button>
            </div>

        </div>
      </div>  */}
      {/* <Expander className = "comments-expander" comment_count = {comment_count}>
     <div>
      
       {<Comments articleId = {article_id}/>}
     </div>
   </Expander> */}
    </article>

  );
};

export default ArticleShowCard;