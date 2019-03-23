import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';


export default function PrivateRoute({ component: Component,authenticated, ...rest }) {
    console.log("Privte:In hereee",authenticated)
    return (
        <Route
          {...rest}
          render={props =>
            authenticated ? (
              <Component {...props} />
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: props.location }
                }}
              />
            )
          }
        />
      );
}
