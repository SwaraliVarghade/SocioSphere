import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsAuthenticated } from "../modules/redux/LoginPage/loginSlice";

const ProtectedRoutes = ({ children }) => {
  const isAuthenticated = useSelector(
    selectIsAuthenticated
  );

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoutes;