import { createBrowserRouter } from "react-router";
import Root from "./../Layouts/MainLayout/Root";
import Home from "./../Pages/Home";
import Services from "./../Pages/Services";
import ServiceDetails from "./../Pages/ServiceDetails";
import NotFound from "../Pages/NotFound";
import Login from "../Layouts/AuthLayout/Login";
import Register from "../Layouts/AuthLayout/Register";
import MyProfile from "../Components/MyProfile";
import PrivateRoute from "../Routes/PrivateRoute";
import ForgotPassword from "./../Layouts/AuthLayout/ForgotPassword";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/services", element: <Services /> },
      {
        path: "/services/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails />
          </PrivateRoute>
        ),
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/forgot-password", element: <ForgotPassword /> },
      {
        path: "/my-profile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);
