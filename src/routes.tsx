import route from 'next-routes';
import { isSSR } from './utils';

interface RouteType {
  name: string;
  page: string;
  pattern: string;
}

export const routes: RouteType[] = [
  { name: 'home', page: 'index', pattern: '/' },
  { name: 'detail-user', page: 'DetailPage', pattern: '/user/:id' },
  { name: 'list-user', page: 'ListPage', pattern: '/users' },
];

const nextRoutes = new route();
routes.forEach((item: RouteType) => {
  return nextRoutes.add(item);
});

export const Link = nextRoutes.Link;
export const Router = nextRoutes.Router;
export const getRouter = (): typeof Router => {
  if (!isSSR) {
    return Router;
  }
  return null;
};

export default nextRoutes;
