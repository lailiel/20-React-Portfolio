import { createRef } from 'react'
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


const routes = [
  { path: '/', element: <HomePage />, nodeRef: createRef(), },
  { path: 'aboutme', element: <AboutPage />, nodeRef: createRef(), },
  { path: 'portfolio', element: <PortfolioPage />, nodeRef: createRef(), },
  { path: 'contact', element: <ContactPage />, nodeRef: createRef(), },
  { path: 'resume', element: <ResumePage />, nodeRef: createRef(), },
]


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: routes.map((route) => ({
      index: route.path === '/',
      path: route.path === '/' ? undefined : route.path,
      element: route.element,
    })),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

export default routes