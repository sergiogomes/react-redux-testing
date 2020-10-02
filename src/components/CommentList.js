import React from "react";
import { connect } from "react-redux";

const renderComments = (comments) => {
  return comments.map((comment) => {
    return <li key={comment}>{comment}</li>;
  });
};

export const CommentList = ({ comments }) => {
  return (
    <div>
      <h4>Comment List</h4>
      <ul>{renderComments(comments)}</ul>
    </div>
  );
};

function mapStateToProps(state) {
  return { comments: state.comments };
}

export default connect(mapStateToProps)(CommentList);
