// import React from 'react';
import ReactDOM from 'react-dom/client';
import{ createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';

import App from './App.jsx';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import ResumePage from './pages/ResumePage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <AboutPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'aboutme',
        element: <AboutPage />,
      },
      {
        path: 'portfolio',
        element: <PortfolioPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'resume',
        element: <ResumePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
