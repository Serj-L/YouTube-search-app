import { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  FavoritesScreen,
  LoginScreen,
  SearchScreen,
  NotFoundScreen,
} from '../screens';
import { useRouteGuard } from './useRouteGuard';

export const RouterView: FC = () => {
  useRouteGuard();

  return (
    <Switch>
      <Route
        exact
        path="/"
        component={SearchScreen}
      />
      <Route
        exact
        path="/login"
        component={LoginScreen}
      />
      <Route
        exact
        path="/favorites"
        component={FavoritesScreen}
      />
      <Route
        path="*"
        component={NotFoundScreen}
      />
    </Switch>
  );
};
