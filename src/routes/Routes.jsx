import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home1 from './../pages/Home1/Home1';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home1 />
            }
        ]
    }


])