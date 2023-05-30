import { useStore, useSelector } from "react-redux";
import { userLogout } from "../../features/login";
import { userProfilReset } from "../../features/user";
import { Navigate, NavLink } from "react-router-dom";
import Logo from "./assets/argentBankLogo.png";
import "./NavigationBar.css";

function NavigationBar() {
  const store = useStore();

  const { token } = useSelector((state) => state.userLogin);
  const { firstName } = useSelector((state) => state.userProfile);

  const logoutHandler = () => {
    store.dispatch(userLogout());
    store.dispatch(userProfilReset());
    <Navigate to="/" />;
  };

  return token ? (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        <NavLink className="main-nav-item" to="/profile">
          <i className="fa fa-user-circle"></i>
          {firstName}
        </NavLink>
        <NavLink onClick={logoutHandler} className="main-nav-item" to="/">
          <i className="fa fa-sign-out"></i>
          Sign Out
        </NavLink>
      </div>
    </nav>
  ) : (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        <NavLink className="main-nav-item" to="/login">
          <i className="fa fa-user-circle nav"></i>
          Sign In
        </NavLink>
      </div>
    </nav>
  );
}

export default NavigationBar;
