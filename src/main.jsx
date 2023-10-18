import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayOut from "./Components/MainLayOut/MainLayOut";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import React from "react";
import AuthProvider from "./Components/Provider/AuthProvider";
import AddProduct from "./Components/AddProduct";
import ShowProduct from "./Components/ShowProduct";
import MyCart from "./Components/MyCart";
import PrivateRoute from "./Components/PrivateRoute";
import CarDetails from "./CarDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "addproduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "showproduct",
        element: <ShowProduct></ShowProduct>,
        loader: () => fetch("http://localhost:5000/product"),
      },
      {
        path: "mycart",
        element: <MyCart></MyCart>,
      },
      {
        path:'/car/:brandname',
        element:<PrivateRoute><CarDetails></CarDetails></PrivateRoute>
      }
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
