import { Route, Routes } from 'react-router-dom';

import Layout from 'components/Layout';

import { routerType } from '../types/router.types';

const routes: routerType[] = [
    {
        path: '',
        element: <Layout />,
        title: 'home',
    },
];

const Router = () => {
    const pageRoutes = routes.map(({ path, title, element }: routerType) => {
        return <Route key={title} path={`/${path}`} element={element} />;
    });

    return <Routes>{pageRoutes}</Routes>;
};

export default Router;
