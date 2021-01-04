import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { CreativeAgency } from '../../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const {login} = useContext(CreativeAgency);
    const [loggedInUser, setLoggedInUser] = login;
    return (
        <Route
        {...rest}
        render={({ location }) =>
        loggedInUser.displayName ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
        );
    };

export default PrivateRoute;