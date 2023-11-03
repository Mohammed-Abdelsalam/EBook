import React from "react";
import { Route, redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, loggedIn, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      loggedIn ? <Component {...props} /> : redirect("/login")
    }
  />
);

export default ProtectedRoute;
