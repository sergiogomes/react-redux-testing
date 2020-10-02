import React, { useState } from "react";
import { connect } from "react-redux";

import { fetchComments, saveComment } from "actions";

export const CommentBox = ({ onSaveComment, onFetchComments }) => {
  const [comment, setComment] = useState("");

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSaveComment(comment);
    setComment("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea value={comment} onChange={handleChange} />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
      <button className="fetch-comments" onClick={onFetchComments}>
        Fetch Comments
      </button>
    </div>
  );
};

const mapDispatchToProps = {
  onSaveComment: saveComment,
  onFetchComments: fetchComments,
};

export default connect(null, mapDispatchToProps)(CommentBox);
