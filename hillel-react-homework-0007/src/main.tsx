import App from './App'
import { LanguageProvider } from './LanguageProvider/LanguageProvider'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage"
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import LoginPage from './pages/loginPage/LoginPage'
import ErrorPage from './pages/errorPage/ErrorPage'
const router = createBrowserRouter([
  {
    path: "/app-page",
    element: <App />,
  },
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/login-page",
    element: <LoginPage/>,
  },
  {
    path: "/error-page",
    element: <ErrorPage/>,
  }

]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<LanguageProvider>
		<RouterProvider router={router} />
		</LanguageProvider>
	</React.StrictMode>
)
