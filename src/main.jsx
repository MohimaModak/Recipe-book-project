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
import DifferentFoodsDetails from "./Component/DifferentFoodsDetails/DifferentFoodsDetails.jsx";
import FoodLoan from "./Component/FoodLoan/FoodLoan.jsx";
import FoodApps from "./Component/FoodApps/FoodApps.jsx";
import SpecificAppFoods from "./Component/SpecificAppFoods/SpecificAppFoods.jsx";
import CntrySpcfcfdDetails from "./Component/CntrySpcfcfdDetails/CntrySpcfcfdDetails.jsx";
import HourRecipeDetails from "./Component/HourRecipeDetails/HourRecipeDetails.jsx";
import AddToCart from "./Component/Navbar/AddToCart/AddToCart.jsx";
import Login from "./Component/Login/Login.jsx";
import AuthProvider from "./Component/AuthProvider/AuthProvider.jsx";
import SignUp from "./Component/SingUp/SingUp.jsx";
import PrivaRoute from "./Component/PrivateRoute/PrivateRoute.jsx";

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
        path: "/details/:id",
        element: <CntrySpcfcfdDetails></CntrySpcfcfdDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/details/${params.id}`),
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
        path: "/hourDetails/:id",
        element: <HourRecipeDetails></HourRecipeDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/hourDetails/${params.id}`),
      },
      {
        path: "/typeoffoods",
        element: <TypeOfFoods></TypeOfFoods>,
      },

      {
        path: "/SpecificAppFoods/:appName",
        element: (
          <PrivaRoute>
            {" "}
            <SpecificAppFoods></SpecificAppFoods>
          </PrivaRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:4000/SpecificAppFoods/${params.appName}`),
      },
      {
        path: "/FoodLoan",
        element: <FoodLoan></FoodLoan>,
      },
      {
        path: "/AddToCart",
        element: (
          <PrivaRoute>
            <AddToCart></AddToCart>
          </PrivaRoute>
        ),
      },
      {
        path: "/FoodApps",
        element: <FoodApps></FoodApps>,
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/SignUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/DifferentFoodsDetails/:id",
        element: <DifferentFoodsDetails></DifferentFoodsDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/typeOfFood/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
