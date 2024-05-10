import UserMenu from "../UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { AuthNav } from "../AuthNav/AuthNav";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigation } from "../Navigation/Navigation";
import css from "./AppBar.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      <ToastContainer />
    </header>
  );
};
