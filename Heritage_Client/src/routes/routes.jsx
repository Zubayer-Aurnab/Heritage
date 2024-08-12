import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
import Home from "../Pages/Home/Home";
import BuyerPage from "../Pages/BuyerPage/BuyerPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: '/buyers',
    element: <BuyerPage />
  }
]);
