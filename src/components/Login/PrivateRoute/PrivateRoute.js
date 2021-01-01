import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { CreativeAgency } from '../../../App';

const PrivateRoute = ({children, ...rest}) => {
    const {userInformation} = useContext(CreativeAgency);
    const [userInfo, setUserInfo] = userInformation;
    return (
        <Route {...rest}
        render={({location}) => 
        userInfo.email ? (children)
        : (<Redirect to={{pathname: "/login",
        state: {form:location}}}/>)}
        />
        );
    };

export default PrivateRoute;