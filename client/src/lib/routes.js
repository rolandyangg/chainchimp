
 

import { createBrowserRouter } from "react-router-dom";
import { Text } from "@chakra-ui/react";

import Home from "../components/index/index.js";
import Dashboard from "../components/dashboard/dashboard.js"

export const ROOT = "/";
export const DASHBOARD = "/dashboard";

export const router = createBrowserRouter([
    {path: ROOT, element: <Home/>},
    {path: DASHBOARD, element: <Dashboard/>},
])