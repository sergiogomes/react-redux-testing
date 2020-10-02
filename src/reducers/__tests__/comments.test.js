import axios from "axios";

import commentsReducer from "reducers/comments";
import { SAVE_COMMENT, FETCH_COMMENTS } from "actions/types";

it("should handle actions of type SAVE_COMMENT", () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "New Comment",
  };
  const newState = commentsReducer([], action);

  expect(newState).toEqual(["New Comment"]);
});

it("should handle actions of type FETCH_COMMENTS", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/comments"
  );
  const action = {
    type: FETCH_COMMENTS,
    payload: response,
  };
  const newState = commentsReducer([], action);

  expect(newState.comments).toEqual(response.length);
});

it("should handle actions of unknown type", () => {
  const newState = commentsReducer([], { type: "UNKNOWN" });

  expect(newState).toEqual([]);
});
