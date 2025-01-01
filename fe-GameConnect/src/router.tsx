import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Communication from "./pages/Communication";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/communication",
        element: <Communication />,
      },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
