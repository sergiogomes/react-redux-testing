import React from "react";
import { mount } from "enzyme";

import ReduxProvider from "redux-provider";
import CommentList from "components/CommentList";

let wrapped;
const initialState = {
  comments: ["Comment 1", "Comment 2", "Comment 3"],
};

beforeEach(() => {
  wrapped = mount(
    <ReduxProvider initialState={initialState}>
      <CommentList />
    </ReduxProvider>
  );
});

it("should create one LI per comment", () => {
  expect(wrapped.find("li").length).toEqual(3);
});

it("should show the text for each comment", () => {
  const commentStr = initialState.comments.toString().replace(/,/g, "");
  expect(wrapped.render().text()).toContain(commentStr);
});
