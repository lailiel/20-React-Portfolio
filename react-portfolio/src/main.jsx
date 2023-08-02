// import React from 'react';
import ReactDOM from 'react-dom/client';
import{ createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

import App from './App.jsx';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/Portfolio';
import ContactPage from './pages/ContactPage';
import ResumePage from './pages/Resume';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <AboutPage />,
    children: [
      {
        index: true,
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
