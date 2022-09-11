import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';
import { useGetCurrentUser } from '../../api/common/useGetCurrentUser';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuth } = useAuth();
  const { data: currentUser } = useGetCurrentUser({ enabled: isAuth });

  return (
    <Route
      {...rest}
      render={props => (isAuth ? <Component {...props} currentUser={currentUser} /> : <Redirect to="/" />)}
    />
  );
};
