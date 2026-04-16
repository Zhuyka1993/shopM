import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, user }) => {
  // не залогінений
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // не адмін
  if (user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  // все ок
  return children;
};

export default ProtectedRoute;