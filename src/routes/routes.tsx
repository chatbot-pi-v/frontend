import { App } from "@src/components/pages/app/App";
import { Chat } from "@src/components/pages/chat/Chat"
import { createBrowserRouter } from "react-router";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"/chat",
    element:<Chat/>,
  }
]);