import { App } from "@src/components/pages/app/App";
import { AudioUpload } from "@src/components/pages/audio-upload/AudioUpload";
import { Chat } from "@src/components/pages/chat/Chat";
import { Dashboard } from "@src/components/pages/dashboard/Dashboard";
import { ImageUpload } from "@src/components/pages/image-upload/ImageUpload";
import { PdfUpload } from "@src/components/pages/pdf-upload/PdfUpload";
import { createBrowserRouter } from "react-router";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "audioupload",
    element: <AudioUpload />,
  },
  {
    path: "/imageupload",
    element: <ImageUpload />
  },
  {
    path: "/pdfupload",
    element: <PdfUpload />
  },
  {
    path: "/chat",
    element: <Chat />,
  }
]);