import React from "react";
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Payges/Home/Home/Home";
import Menu from "../Payges/Menu/Menu/Menu";
import Order from "../Payges/Order/Order/Order";
import Login from "../Payges/Login/Login";
import SignUp from "../Payges/SignUp/SignUp";
import Secret from "../Payges/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Payges/Dashboard/MyCart/MyCart";
import AllUsers from "../Payges/Dashboard/AllUsers/AllUsers";

  export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
               path: '/', 
               element: <Home></Home>
            },
            {
              path: 'menu',
              element: <Menu></Menu>
            },
            {
              path: 'order/:category',
              element: <Order></Order>
            },
            {
              path: 'login',
              element: <Login></Login>
            },
            {
              path: 'signup',
              element: <SignUp></SignUp>
            },
            {
              path: 'secret',
              element: <PrivateRoute><Secret></Secret></PrivateRoute>
            }
        ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: 'mycart',
          element: <MyCart></MyCart>
        },
        {
          path: 'allusers',
          element: <AllUsers></AllUsers>
        }   
      ]
    }
  ])