import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
import Home from "../Pages/Home/Home";
import BuyerPage from "../Pages/BuyerPage/BuyerPage";
import Login from "../Pages/LogIn/Login";
import Registration from "../Pages/Registration/Registration";
import App from "../App";
import Dashboard from "../Components/Dashboard/Dashboard";
import ManageUsers from "../Pages/ManageUsers/ManageUsers";
import PostProperty from "../Pages/PostProperty/PostProperty";
import PropertyDetails from "../Pages/PropertyDetails/PropertyDetails";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
        index: true
      },
      {
        path: '/buyers',
        element: <BuyerPage />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: "/registration",
        element: <Registration />
      },
      {
        path: '/propertyDetails/:id',
        element: <PropertyDetails />
      }
    ]
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <div className="text-5xl text-center mt-10 font-bold">WELCOME TO DASHBOARD</div>,
        index: true

      },
      {
        path: "/dashboard/manageUsers",
        element: <ManageUsers />,

      },
      {
        path: "/dashboard/post",
        element: <PostProperty />,
      }
    ]
  }


]);
