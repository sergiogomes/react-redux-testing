import React, { useEffect } from "react";
import { connect } from "react-redux";

export default (ChildComponent) => {
  const ComposedComponent = ({ auth, history, ...props }) => {
    useEffect(() => {
      if (!auth) {
        setTimeout(() => {
          history.push("/");
        }, 500);
      }
    }, [auth, history]);

    return <ChildComponent {...props} />;
  };

  const mapStateToProps = (state) => {
    return { auth: state.auth };
  };

  return connect(mapStateToProps)(ComposedComponent);
};
