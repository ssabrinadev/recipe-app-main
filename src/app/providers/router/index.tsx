import { createBrowserRouter } from "react-router-dom";
import { privateRoutes } from "./private";
import { publicRoutes } from "./public";

export const rootRoutes = privateRoutes.concat(publicRoutes)
const router = createBrowserRouter(rootRoutes)

export default router
