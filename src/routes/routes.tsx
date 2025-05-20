import { App } from "@src/components/pages/app/App";
import { AudioUpload } from "@src/components/pages/audio-upload/AudioUpload";
import { Chat } from "@src/components/pages/chat/Chat";
import { Dashboard } from "@src/components/pages/dashboard/Dashboard";
import { ImageUpload } from "@src/components/pages/image-upload/ImageUpload";
import Login from "@src/components/pages/Login";
import { PdfUpload } from "@src/components/pages/pdf-upload/PdfUpload";
import { UsersControl } from "@src/components/pages/users-control/UsersControl";
import { UserFormPage } from "@src/components/pages/userFormPage/UserFormPage";
import { createBrowserRouter } from "react-router";
import { Login } from "@src/components/pages/login/login";

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
    path: "/userscontrol",
    element: <UsersControl />
  },
  {
    path: "/userform",
    element: <UserFormPage />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
  {
    path: "/Login",
    element: <Login />,
  }
]);