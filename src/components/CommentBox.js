import React, { useState } from "react";
import { connect } from "react-redux";

import { saveComment } from "actions";

export const CommentBox = ({ onSaveComment }) => {
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
    <form onSubmit={handleSubmit}>
      <h4>Add a Comment</h4>
      <textarea value={comment} onChange={handleChange} />
      <div>
        <button>Submit Comment</button>
      </div>
    </form>
  );
};

const mapDispatchToProps = {
  onSaveComment: saveComment,
};

export default connect(null, mapDispatchToProps)(CommentBox);
