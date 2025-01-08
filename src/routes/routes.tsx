import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import { routerType } from '../types/router.types';

const routes: routerType[] = [
    {
        path: '',
        element: <Home />,
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
