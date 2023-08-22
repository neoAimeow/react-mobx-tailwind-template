import SuspenseLazy from '@/components/SuspenseLazy';
import { RouteObject } from 'react-router-dom';

const Home = SuspenseLazy(() => import(/* webpackChunkName:"" */ '@/view/Home'));
const NotFound = SuspenseLazy(() => import(/* webpackChunkName:"about" */ '@/view/NotFound'));

const routes: RouteObject[] = [
    {
        path: '/',
        element: Home
    },
    {
        path: 'home',
        element: Home
    },
    // 未匹配到页面
    {
        path: '*',
        element: NotFound
    }
];

export default routes;
