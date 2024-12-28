import { createBrowserRouter, RouterProvider  } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
    

const router = createBrowserRouter([

    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                // path:"/Blockchain",
            }
        ]
    }
])

export function AppRouter() {
  return <RouterProvider router={router} />;
}