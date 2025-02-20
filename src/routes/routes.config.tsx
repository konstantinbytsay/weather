import { RouteObject } from "react-router-dom";
import { Home } from "@src/pages/Home/Home";
import { NotFound } from "@src/pages/NotFound/NotFound";
import { routes } from "./consts";
import { City } from "@src/pages/City/City";

interface RouteConfig extends Omit<RouteObject, "path" | "element"> {
  path: string;
  element: React.ReactNode;
}

export const routesConfig: RouteConfig[] = [
  {
    path: routes.Home,
    element: <Home />,
  },
  {
    path: routes.NotFound,
    element: <NotFound />,
  },
  {
    path: routes.City,
    element: <City />,
  },
];
