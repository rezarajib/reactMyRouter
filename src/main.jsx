import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Header from './components/Root/Header/Header.jsx';
import Mobbile from './components/Mobbile/Mobbile.jsx';
import Laptop from './components/Laptop/Laptop.jsx';
import Blog from './components/Blog/Blog.jsx';

const router = createBrowserRouter([
 {
  path: '/',
  element: <Root />, // অথবা Component: Root
  children: [
    { index: true, Component: Home },
    { path: "about", Component: About },
    {path : "header",Component:Header},
    {path:"mobbile", Component:Mobbile},
    {path:"laptop", Component:Laptop},
    {path:"blog",Component:Blog},
  ] // এখানে স্কয়ার ব্র্যাকেট শেষ করতে হবে
},
  // {
  //   path:'about',
  //   element: <div><h1>This is About </h1></div>
  // }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
