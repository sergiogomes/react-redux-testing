import React from "react";
import { mount } from "enzyme";

import ReduxProvider from "redux-provider";
import CommentList from "components/CommentList";

let wrapped;

beforeEach(() => {
  const initialState = {
    comments: ["Comment 1", "Comment 2", "Comment 3"],
  };
  wrapped = mount(
    <ReduxProvider initialState={initialState}>
      <CommentList />
    </ReduxProvider>
  );
});

it("should create one LI per comment", () => {
  expect(wrapped.find("li").length).toEqual(3);
});
