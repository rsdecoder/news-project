import React from "react";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import { deleteComment } from "../../apis";
import { useContext } from "react";
import UserContext from "../contexts/User";
import moment from "moment/moment";

const CommentCard = ({ comment, setComments }) => {
  const { loggedInUser } = useContext(UserContext);
  const { comment_id, article_id, body, votes, author, created_at } = comment;

  function handleClick(event) {
    const commentId = event.target.value;
    if (loggedInUser.username === author) {
      deleteComment(event.target.value)
        .then(() => {
          alert("Comment deleted");
          setComments((currComments) => {
            const commentsToKeep = currComments.filter((currcomment) => {
              return currcomment.comment_id !== Number(commentId);
            });
            return commentsToKeep;
          });
        })
        .catch((err) => {
          alert("something went wrong! please try again!");
          setComments((currComments) => {
            return currComments;
          });
        });
    } else {
      alert("Not authenticated user! Please login to delete your comment!");
    }
  }

  return (
    <div className="comments-container">
      <h4 className="comment-item">
        <span className="comment-author">{author}</span>{" "}
      </h4>
      <p className="comment-item comment-body">{body}</p>
      <p className="comment-item comment-time-stamp">
        {moment.utc(created_at).fromNow()}
      </p>
      <div className="comment-item comment-vote-section">
        <div className="comment-vote comment-item">
          <ThumbUpAltOutlinedIcon className="vote-section-item" />
          <p className="vote-section-item">{votes}</p>
          <ThumbDownAltOutlinedIcon className="vote-section-item" />
        </div>
        <button
          disabled={loggedInUser.username === author ? false : true}
          value={comment_id}
          className="comment-item delete-button"
          onClick={handleClick}
        >
          Delete comment
        </button>
      </div>
    </div>
  );
};

export default CommentCard;
