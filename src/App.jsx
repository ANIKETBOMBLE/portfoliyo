import React from 'react'
import { createBrowserRouter , RouterProvider } from 'react-router'

import { Link } from 'react-router'
import First from './First'
import Header from "./compontus/Header";
import Footer from "./compontus/Footer";
import Home from './Home';
import Skills from './S.jsx';
import About from './A.jsx' 
import P from './P.jsx';






const router = createBrowserRouter([
  {
    path: "/",
    element: <First />,
    children: [
      {
        index:true,
        element: <Home/>
      },{
        path: "/skills",
        element: <Skills />
      }
      
      ,{
        path: "/About",
        
        element: <About />
      },{
        path: "/project",
        element:<P />
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
