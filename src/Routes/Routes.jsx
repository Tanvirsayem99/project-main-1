import {
    createBrowserRouter,
  } from "react-router-dom";
import Assingment from "../Components/Assingment/Assingment";
import Home from "../Components/Home/Home";
import Main from "../Components/Main/Main";
import Login from "../Components/Users/Login";
import Register from "../Components/Users/Register";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path:'/',
          element: <Home></Home>
        },
      ]
    },
    {
      path: "/assignment",
      element: <Assingment></Assingment>
    },
    {
      path: "/login",
      element: <Login></Login>
    },
    {
      path: "/register",
      element: <Register></Register>
    }
  ]);