import { App } from "@src/components/pages/app/App";
import { Dashboard } from "@src/components/pages/dashboard/Dashboard";
import { Chat } from "@src/components/pages/chat/Chat";
import { createBrowserRouter } from "react-router";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  }
  {
    path: "/chat",
    element: <Chat />,
  }
]);