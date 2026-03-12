import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/home";
import Course from "./Pages/course";
import Signup from "./Pages/signup";
import ContactUs from "./Pages/ContactUs";
import About from "./Pages/about";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./components/ProtectedRoute";
import BuyBook from "./Pages/BuyBook";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/course",
    element: (
      <ProtectedRoute>
        <Course />
      </ProtectedRoute>
    ),
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/contactus",
    element: <ContactUs />,
  },
  {
    path: "/aboutus",
    element: <About />,
  },
  {
    path:"/buy",
    element:<BuyBook/>
  },
]);

const App = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-black dark:text-white transition-colors duration-200">
      <RouterProvider router={AppRouter} />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default App;
