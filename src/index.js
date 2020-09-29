import React from "react";
import ReactDOM from "react-dom";

import ReduxProvider from "redux-provider";
import App from "components/App";

ReactDOM.render(
  <ReduxProvider>
    <App />
  </ReduxProvider>,
  document.querySelector("#root")
);
