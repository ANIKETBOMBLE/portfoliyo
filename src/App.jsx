import React from 'react'
import { createBrowserRouter , RouterProvider } from 'react-router'

import { Link } from 'react-router'
import First from './First'
import Header from "./compontus/Header";
import Footer from "./compontus/Footer";
import Home from './Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <First />,
    children: [
      {
        index:true,
        element: <Home/>
      }
    ]
  }
]);

export default function App() {
  
  return (
    <>
      <RouterProvider router={router} />
      
      
    </>
  
  )
}
