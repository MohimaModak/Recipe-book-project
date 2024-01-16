import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivaRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center items-center h-[100vh]">
        <span className="loading loading-ball loading-lg"></span>;
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to={"/Login"}></Navigate>;
};

export default PrivaRoute;
