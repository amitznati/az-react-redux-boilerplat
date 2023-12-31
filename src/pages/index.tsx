import * as React from 'react';
import {
    RouterProvider,
    createBrowserRouter
} from "react-router-dom";

import Posts from './Posts.jsx';
import Home from './Home.jsx';
import Root from "./Root.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'posts',
                element: <Posts />
            }
        ]
    },

]);
export const Index = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default Index;
