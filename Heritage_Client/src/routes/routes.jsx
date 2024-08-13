import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
import Home from "../Pages/Home/Home";
import BuyerPage from "../Pages/BuyerPage/BuyerPage";
import Login from "../Pages/LogIn/Login";
import Registration from "../Pages/Registration/Registration";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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

]);
