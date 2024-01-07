import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Component/Root/Root.jsx";
import Home from "./Component/Home/Home.jsx";
import AddRecipe from "./Component/AddRecipe/AddRecipe.jsx";
import Recipes from "./Component/Recipes/Recipes.jsx";
import Edit from "./Component/Edit/Edit.jsx";
import CountryFoodDetails from "./Component/CountryFoodDetails/CountryFoodDetails.jsx";
import TimeTable from "./TimeTable/TimeTable.jsx";
import Hour from "./Component/Hour/Hour.jsx";
import TypeOfFoods from "./Component/TypeOfFoods/TypeOfFoods.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addrecipe",
        element: <AddRecipe></AddRecipe>,
      },
      {
        path: "/recipes",
        element: <Recipes></Recipes>,
        loader: () => fetch("http://localhost:4000/addRecipe"),
      },
      {
        path: "/countryWiseFood",
        element: <Recipes></Recipes>,
      },
      {
        path: "/countryFoodKid/:country",
        element: <CountryFoodDetails></CountryFoodDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/countryFoodKid/${params.country}`),
      },
      {
        path: "/edit/:id",
        element: <Edit></Edit>,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/edit/${params.id}`),
      },
      {
        path: "/hourWiseFood/:Hour",
        element: <Hour></Hour>,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/hourWiseFood/${params.Hour}`),
      },
      {
        path: "/timetable",
        element: <TimeTable></TimeTable>,
      },
      {
        path: "/typeoffoods",
        element: <TypeOfFoods></TypeOfFoods>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
