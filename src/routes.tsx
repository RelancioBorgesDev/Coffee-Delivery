import { createBrowserRouter } from "react-router-dom";

import { AppLayout } from "./_layouts/app-layout";
import Home from "./pages/Home/Home";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
    ],
  },
]);
