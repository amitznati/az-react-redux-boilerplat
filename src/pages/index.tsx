import * as React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Posts from "./Posts.jsx";
import Home from "./Home.jsx";
import Root from "./Root.jsx";
import { LoginPage } from "../widgets";

const links = [
  { to: "/", label: "Home" },
  { to: "login", label: "Login" },
  { to: "posts", label: "Posts" },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root links={links} />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "posts",
        element: <Posts />,
      },
    ],
  },
]);
export const Index = () => {
  return <RouterProvider router={router} />;
};

export default Index;
