import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./authentication/Login";
import Browse from "./Browse";
import SignUp from "./authentication/SignUp";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <SignUp />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/browser",
      element: <Browse />,
    },
  ]);
  return <RouterProvider router={appRouter} />;
};

export default Body;
