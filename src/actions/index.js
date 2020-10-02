import axios from "axios";
import { SAVE_COMMENT } from "actions/types";
import { FETCH_COMMENTS } from "actions/types";

export const saveComment = (comment) => ({
  type: SAVE_COMMENT,
  payload: comment,
});

export const fetchComments = () => {
  const response = axios.get("https://jsonplaceholder.typicode.com/comments");
  return {
    type: FETCH_COMMENTS,
    payload: response,
  };
};
