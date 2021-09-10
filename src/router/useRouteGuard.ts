import { useLocation, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from '../store';

export const useRouteGuard = () => {
  const { pathname } = useLocation();
  const routeHistory = useHistory();
  const { userId } = useSelector((state: RootState) => state.user);

  if (!userId && pathname !== '/login') {
    routeHistory.push('/login');
  }

  return null;
};
