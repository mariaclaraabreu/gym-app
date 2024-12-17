import { Route, Routes } from "react-router-dom";
import { routerType } from "../types/router.types";
import Home from "../pages/Home";

const routes: routerType[] = [
    {
      path: "",
      element: <Home />,
      title: "home"
    },
  ];

const Router = () => {
  const pageRoutes = routes.map(({ path, title, element }: routerType) => {
    return <Route key={title} path={`/${path}`} element={element} />;
  });

  return <Routes>{pageRoutes}</Routes>;
};

export default Router;