import { useState } from "react";
import ForumSharpIcon from "@mui/icons-material/ForumSharp";

function Expander({ children, comment_count }) {
  const [isShowing, setIsShowing] = useState(false);
  function handleClick() {
    setIsShowing((currShowing) => {
      return !currShowing;
    });
  }
  function toggleContent() {
    if (isShowing) {
      return children;
    } else {
      return null;
    }
  }
  return (
    <div>
      <button className="comments-button" onClick={() => handleClick()}>
        {isShowing ? "Hide" : "View"} comments{" "}
        <ForumSharpIcon className="vote-section-item" />
        {comment_count}
      </button>
      {toggleContent()}
    </div>
  );
}
export default Expander;
