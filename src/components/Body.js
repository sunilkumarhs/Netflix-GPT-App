import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./authentication/Login";
import Browse from "./browse/Browse";
import SignUp from "./authentication/SignUp";
import SignUpForm from "./authentication/SignUpForm";
import TVShows from "./tvShows/TVShows";
import MoviePage from "./moviesSection/MoviePage";

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
    {
      path: "/tvShows",
      element: <TVShows />,
    },
    {
      path: "/movies",
      element: <MoviePage />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
