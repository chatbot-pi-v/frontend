import { App } from "@src/components/pages/app/App";
import { AudioUpload } from "@src/components/pages/audio-upload/AudioUpload";
import { Chat } from "@src/components/pages/chat/Chat";
import { Dashboard } from "@src/components/pages/dashboard/Dashboard";
import { createBrowserRouter } from "react-router";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "audioupload",
        element: <AudioUpload />,
      },
    ] 
  },
  // {
  //   path: "/audioupload",
  //   element: <AudioUpload />,
  // },
  {
    path: "/chat",
    element: <Chat />,
  }
]);