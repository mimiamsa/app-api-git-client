import React from "react";
import { Route, Redirect } from "react-router-dom";

import { AuthConsumer } from "./Guard";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  

  return <AuthConsumer>
    {({ loginStatus }) => (

      <Route
        render={props => {
          return loginStatus ? (
            <Component {...props} />
          ) : (
              <>
                {/* <SignUpModal /> */}
                <Redirect to="/" />
              </>
            );
        }}
        {...rest} // pass all passed (rest) argument(s) in a literal object to the Route
      />
    )}
  </AuthConsumer>
};

export default ProtectedRoute;
