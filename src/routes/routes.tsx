import { App } from "@src/components/pages/app/App";
import { AudioUpload } from "@src/components/pages/audio-upload/AudioUpload";
import { Chat } from "@src/components/pages/chat/Chat";
import { Dashboard } from "@src/components/pages/dashboard/Dashboard";
import { ImageUpload } from "@src/components/pages/image-upload/ImageUpload";
import { PdfUpload } from "@src/components/pages/pdf-upload/PdfUpload";
import { UsersControl } from "@src/components/pages/users-control/UsersControl";
import { UserFormPage } from "@src/components/pages/userFormPage/UserFormPage";
import { createBrowserRouter } from "react-router";
import { Login } from "@src/components/pages/login/login";
// import PrivateRoute from "@src/components/privateRoute/PrivateRoute";
import ProtectedRoute from "@src/components/privateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>)
  },
  {
    path: "audioupload",
    element: (
      <ProtectedRoute>
        <AudioUpload />
      </ProtectedRoute>)
  },
  {
    path: "/imageupload",
    element: (
      <ProtectedRoute>
        <ImageUpload />
      </ProtectedRoute>)
  },
  {
    path: "/pdfupload",
    element: (
      <ProtectedRoute>
        <PdfUpload />
      </ProtectedRoute>)
  },
  {
    path: "/userscontrol",
    element: (
      <ProtectedRoute>
        <UsersControl />
      </ProtectedRoute>)
  },
  {
    path: "/userform",
    element: ( 
      <ProtectedRoute>
        <UserFormPage />
      </ProtectedRoute>)
  },
  {
    path: "/chat",
    element: <Chat />,
  },
  {
    path: "/login",
    element: <Login />,
  }
]);