import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticlesById } from "../../apis";
import Comments from "./Comments";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import Expander from "./Expander";
import { patchArticle } from "../../apis";
import ErrorPage from "./ErrorPage";
import { ThreeDots } from "react-loader-spinner";
import moment from "moment/moment";

const SingleArticle = () => {
  const [err, setErr] = useState(null);
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState({});

  useEffect(() => {
    setIsLoading(true);
    fetchArticlesById(article_id)
      .then(({ article }) => {
        setArticle(article);
        setIsLoading(false);
      })
      .catch((err) => {
        const { msg } = err.response.data;
        setErr(msg);
      });
  }, []);

  function upVote() {
    setArticle((currArticle) => {
      return currArticle.map((article) => {
        return { ...article, votes: article.votes + 1 };
      });
    });
    const incVotes = 1;
    patchArticle(article_id, incVotes).catch((err) => {
      setArticle((currArticle) => {
        return currArticle.map((article) => {
          return { ...article, votes: article.votes - 1 };
        });
      });
    });
  }

  function downVote() {
    setArticle((currArticle) => {
      return currArticle.map((article) => {
        return { ...article, votes: article.votes - 1 };
      });
    });
    const decVotes = -1;
    patchArticle(article_id, decVotes).catch((err) => {
      setArticle((currArticle) => {
        return currArticle.map((article) => {
          return { ...article, votes: article.votes + 1 };
        });
      });
    });
  }
  if (err) return <ErrorPage error={err} />;

  if (isLoading) {
    return (
      <ThreeDots
        visible={true}
        height="30%"
        width="30%"
        color="#4fa94d"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass="spinner-icon"
      />
    );
  }

  return (
    <div className="single-article-container">
      <h1 className="single-article-title">{article[0].title}</h1>
      <br></br>
      <img
        className="single-article-img"
        src={article[0].article_img_url}
        alt="image"
        width="500px"
      />
      <section className="vote-section">
        <div className="vote">
          <button value="up" className="button-vote up-vote" onClick={upVote}>
            <ThumbUpIcon className="like-button" />
          </button>
          <p className="vote-section-item vote-count">{article[0].votes}</p>
          <button
            value="down"
            className="button-vote down-vote"
            onClick={downVote}
          >
            <ThumbDownIcon className="dislike-button" />
          </button>
        </div>
        <Expander
          className="comments-expander"
          comment_count={article[0].comment_count}
        >
          <Comments articleId={article_id} />
        </Expander>
      </section>
      <article>
        <p>{article[0].body}</p>
        <br></br>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolor necessitatibus porro reprehenderit tempora voluptas tenetur molestias ducimus, iure quia dignissimos facilis et minus cupiditate voluptates ullam error, quos maiores.
        Quo vel ratione, assumenda ducimus iusto, incidunt corrupti quidem error eveniet magnam necessitatibus, commodi nobis. Ad minus quaerat aperiam esse a, itaque est animi rerum deleniti in magnam! Amet, voluptatum!
        Impedit ducimus voluptate, nobis soluta aliquam quibusdam minus exercitationem beatae architecto obcaecati repellat possimus tempora quisquam qui? Asperiores, at commodi deleniti voluptates autem reiciendis quaerat incidunt, nemo, doloribus eum nulla.
        Ratione aperiam earum id, quam veniam doloribus quidem, unde voluptas officiis voluptatum neque facilis animi provident incidunt, accusamus maxime eaque numquam autem deserunt! Deserunt et iste sunt laborum reiciendis magnam?</p>
      </article>
      <br></br>
      <section className="article-end-section">
        <p className="article-end-section-item article-end-section-author">
          <b>Author:</b>{" "}
          <span className="author-name">{article[0].author}</span>
        </p>
        <p className="article-end-section-item  article-end-section-time">
          <em>
            {moment.utc(article[0].created_at).format("MMMM D, YYYY h:mm A")}
          </em>
        </p>
      </section>
    </div>
  );
};

export default SingleArticle;
