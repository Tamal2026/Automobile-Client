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
import ErrorPage from "./Components/ErrorPage";
import About from "./Components/About";
import PrivateRoute from "./Components/PrivateRoute";
import ShowProductCard from "./Components/ShowProductCard";
import UpdateData from "./Components/UpdateData";

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
        path: "showproduct/:brandname",
        element: (
          <PrivateRoute>
            <ShowProduct></ShowProduct>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://server-side-9maji8bub-tamal-krishna-das-projects.vercel.app/product"
          ),
      },
      {
        path: "mycart",
        element: <MyCart></MyCart>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
      {
        path: "/showproductcard/:_id",
        element: <ShowProductCard></ShowProductCard>,
        loader: () => fetch("https://server-side-9maji8bub-tamal-krishna-das-projects.vercel.app/product"),
      },
      {
        path: "/updateproduct/:_id",
        element: <UpdateData></UpdateData>,
        loader: ({ params }) =>
          fetch(`https://server-side-9maji8bub-tamal-krishna-das-projects.vercel.app/product/${params._id}`),
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
