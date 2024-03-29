import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./authentication/Login";
import Browse from "./browse/Browse";
import SignUp from "./authentication/SignUp";
import SignUpForm from "./authentication/SignUpForm";
import TVShows from "./tvShows/TVShows";
import MoviePage from "./moviesSection/MoviePage";
import GPTSearchPage from "./GPTSearchPage";
import DetailsPage from "./DetailsPage";
import MyList from "./MyList";

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
    {
      path: "/gptSearch",
      element: <GPTSearchPage />,
    },
    {
      path: "/detailsPage",
      element: <DetailsPage />,
    },
    {
      path: "/myList",
      element: <MyList />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
