import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "./redux/auth/selectors";

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const isloggedIn = useSelector(selectIsLoggedIn);
  return isloggedIn ? Component : <Navigate to={redirectTo} />;
};
