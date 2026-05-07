import { StrictMode } from 'react'
import React from "react";
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import RootLayout from './Components/layOut/RootLayout.jsx';
import { store } from './App/store.js'
import { Provider } from 'react-redux'
import ProductDetails from './Pages/ProductDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [

      { path: "home", Component: Home },
      { path: "about", Component: About },
      { path: "/details/:id", Component: ProductDetails },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>,
  </StrictMode>
)
