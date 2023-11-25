import React from "react";
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Payges/Home/Home/Home";
import Menu from "../Payges/Menu/Menu/Menu";
import Order from "../Payges/Order/Order/Order";

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
              path: 'order',
              element: <Order></Order>
            }
        ]
    },
  ])