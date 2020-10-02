import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import ReduxProvider from "redux-provider";
import App from "components/App";

ReactDOM.render(
  <ReduxProvider>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </ReduxProvider>,
  document.querySelector("#root")
);
