import { saveComment, fetchComments } from "actions";
import { SAVE_COMMENT, FETCH_COMMENTS } from "actions/types";

describe("saveComment", () => {
  it("should have the correct type", () => {
    const action = saveComment();
    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it("should have the correct payload", () => {
    const action = saveComment("New Comment");
    expect(action.payload).toEqual("New Comment");
  });
});

describe("fetchComments", () => {
  it("should have the correct type", () => {
    const action = fetchComments();
    expect(action.type).toEqual(FETCH_COMMENTS);
  });
});
