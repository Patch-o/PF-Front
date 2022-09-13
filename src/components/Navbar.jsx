import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/auth/auth.actions";
import { Link } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import "./Navbar.scss";
import { FormattedMessage } from "react-intl";

const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="navbar">
      <Link to="/">
        <h1>
          <FormattedMessage id="home.nav" defaultMessage="Casa" />
        </h1>
      </Link>
      {!user && (
        <Link to="/login">
          <h1>
            <FormattedMessage id="login.nav" defaultMessage="Conectar" />
          </h1>
        </Link>
      )}{" "}
      {/*si no existe usuario muestra el link de login*/}
      {!user && (
        <Link to="/register">
          <h1>
            <FormattedMessage id="register.nav" defaultMessage="Registro" />
          </h1>
        </Link>
      )}{" "}
      {/*si no existe usuario muestra el link de register*/}
      {user?.role === "admin" && (
        <Link to="/admin">
          <h1>
            <FormattedMessage id="admin.nav" defaultMessage="Panel Admin" />
          </h1>
        </Link>
      )}
      {user && (
        <Link to="/all-posts">
          <h1>
            all-posts
          </h1>
        </Link>
      )}
      {user && (
        <Link to="/my-posts">
          <h1>
            <FormattedMessage id="post.nav" defaultMessage="Mis Posts" />
          </h1>
        </Link>
      )}
      {user && (
        <Link to="/my-account">
          <h1>
            <FormattedMessage id="account.nav" defaultMessage="Mi Cuenta" />
          </h1>
        </Link>
      )}
      {user && (
        <button className="logout" onClick={() => dispatch(logoutUser())}>
          <h1>
            <FormattedMessage id="logout.nav" defaultMessage="Desconectarse" />
          </h1>
        </button>
      )}{" "}
      {/*si existe usuario muestra el botton de logout*/}
      {user && (
        <h3>
          <FormattedMessage id="welcome.nav" defaultMessage="Bienvenido" />{" "}
          {user.name}
        </h3>
      )}
      <LanguageSelector />
    </div>
  );
};

export default Navbar;
