import React from "react";
import { Link } from "react-router-dom";
import StarsIcon from "@mui/icons-material/Stars";
import CommentIcon from "@mui/icons-material/Comment";
import moment from "moment/moment";

const ArticleShowCard = ({ article }) => {
  const {
    topic,
    votes,
    created_at,
    title,
    article_img_url,
    author,
    comment_count,
    article_id,
  } = article;

  return (
    <article className="article">
      <img
        className="article-item article-img"
        src={article_img_url}
        alt={`An article about ${topic}`}
      />
      <Link
        to={`/articles/${article_id}`}
        className="article-item article-heading"
      >
        <p className="article-title">{title} </p>
      </Link>
      <p className="article-item article-info">
        Topic: <span className="article-topic-wrapper">{topic}</span>
      </p>
      <p className="article-item article-info">
        Author: <span className="article-author">{author}</span>
      </p>
      <div className="article-item article-sort-section">
        <div className="article-sub-section">
          <StarsIcon className="article-rating-icon" />
          <p className="article-votes">{votes}</p>
        </div>
        <div className="article-sub-section">
          <CommentIcon className="article-comment-icon" />
          <p className="article-comment-count">{comment_count}</p>
        </div>
        <p className="article-timestamp">
          {moment.utc(created_at).format("MMMM D, YYYY h:mm A")}
        </p>
      </div>
    </article>
  );
};

export default ArticleShowCard;
