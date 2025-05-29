import { useAuth } from "@src/hooks/use-auth/use-auth";
import { ReactNode } from "react";

import { Navigate } from "react-router-dom"; 

const ProtectedRoute: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { isAuthenticated, loading } = useAuth();

    if (loading) {
      return <div>Carregando...</div>; // Ou um Spinner
    }
  
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }
  
    return <>{children}</>;
};

export default ProtectedRoute;
