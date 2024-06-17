import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login/Login";
import ListPage from "./pages/list/List";
import DetailsPage from "./pages/details/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/home",
    element: <ListPage />,
  },
  {
    path: "/info/:id",
    element: <DetailsPage />,
  },
]);

const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
