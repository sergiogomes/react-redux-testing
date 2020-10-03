import React from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";

import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import { changeAuth } from "actions";

export const App = ({ auth, onChangeAuth }) => {
  const handleAuth = () => {
    onChangeAuth(!auth);
  };

  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post A Comment</Link>
        </li>
        <li>
          <button onClick={handleAuth}>{auth ? "Sign Out" : "Sign In"}</button>
        </li>
      </ul>
      <Route path="/" exact component={CommentList} />
      <Route path="/post" component={CommentBox} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

const mapDispatchToProps = {
  onChangeAuth: changeAuth,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
