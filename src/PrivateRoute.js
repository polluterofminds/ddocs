import React from "react";
import { Route } from "react-router-dom";

const handleRender = (props, isSignedIn, Component) => {
  if (!isSignedIn) {
    return <AuthPage />;
  }

  return <Component {...props} />;
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isSignedIn } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) => handleRender(props, isSignedIn, Component)}
    />
  );
};

export default PrivateRoute;