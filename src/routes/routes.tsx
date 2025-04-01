import { App } from "@src/components/pages/app/App";
import { createBrowserRouter } from "react-router";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);