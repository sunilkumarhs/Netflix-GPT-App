import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./authentication/Login";
import Browse from "./Browse";
import SignUp from "./authentication/SignUp";
import SignUpForm from "./authentication/SignUpForm";

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
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/signUpForm/:mailId",
      element: <SignUpForm />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
