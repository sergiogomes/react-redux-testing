import commentsReducer from "reducers/comments";
import { SAVE_COMMENT } from "actions/types";

it("should handle actions of type SAVE_COMMENT", () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "New Comment",
  };
  const newState = commentsReducer([], action);

  expect(newState).toEqual(["New Comment"]);
});

it("should handle actions of unknown type", () => {
  const newState = commentsReducer([], { type: "UNKNOWN" });

  expect(newState).toEqual([]);
});
