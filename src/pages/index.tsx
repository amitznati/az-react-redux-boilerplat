import * as React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";

import Home from "./Home.jsx";
import Root from "./Root.jsx";
import { LoginPage, PostsList } from "@widgets";
import { ReactNode } from "react";
import { useAuth } from "../hooks/AuthProvider";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/" replace />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "login", element: <LoginPage /> },
      { path: "posts", element: <ProtectedRoute><PostsList /></ProtectedRoute>},
    ],
  },
]);
export const Index = () => {
  return <RouterProvider router={router} />;
};

export default Index;
