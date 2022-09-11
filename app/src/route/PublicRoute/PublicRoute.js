import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useQueryClient } from 'react-query';

import { useAuth } from '../../hooks/useAuth';

export const PublicRoute = ({ component: Component, ...rest }) => {
  const { isAuth } = useAuth();

  console.log('isLogin :>> ', isAuth);

  const queryClient = useQueryClient();

  console.log('queryClient :>> ', queryClient);

  return <Route {...rest} render={props => (isAuth ? <Redirect to="/home" /> : <Component {...props} />)} />;
};
