import { Navigate, Outlet } from "react-router-dom";

function Auth() {
  const user = localStorage.getItem("x-auth-token");

  return user ? <Outlet /> : <Navigate replace to="/login" />;
}

export default Auth;
