import React from "react";
import { mount } from "enzyme";

import ReduxProvider from "redux-provider";
import CommentBox from "components/CommentBox";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <ReduxProvider>
      <CommentBox />
    </ReduxProvider>
  );
});

it("should have a text area and a button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});

describe("the text area", () => {
  beforeEach(() => {
    wrapped.find("textarea").simulate("change", {
      target: { value: "new comment" },
    });
    wrapped.update();
  });

  it("should match the text typed in", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
  });

  it("should be cleared when the form is submited", () => {
    wrapped.find("form").simulate("submit");
    wrapped.update();
    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});

afterEach(() => {
  wrapped.unmount();
});

// console.log(wrapped.find("textarea").length);
