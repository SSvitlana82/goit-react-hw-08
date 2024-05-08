import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "./redux/auth/selectors";

export const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  const isloggedIn = useSelector(selectIsLoggedIn);
  return isloggedIn ? <Navigate to={redirectTo} /> : Component;
};
