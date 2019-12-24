import React from "react";
import { Route, Redirect } from "react-router-dom";



// const name = "rgtgt"

const ProtectedRoute = ({
  component: Component,
  userName:name,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        //Check Authenticated ? True
        // alert(name);
        if (name !== "") {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};



export default ProtectedRoute;
