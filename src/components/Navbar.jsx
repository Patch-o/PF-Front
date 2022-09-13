import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../redux/auth/auth.actions';
import { Link } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
import './Navbar.scss';



const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  
  return (
    <div className='navbar'>
      <Link to="/">Home</Link>
      {!user && <Link to="/login">Login</Link>} {/*si no existe usuario muestra el link de login*/}
      {!user && <Link to="/register">Register</Link>} {/*si no existe usuario muestra el link de register*/}
      {user?.role === "admin" && <Link to="/admin">Panel admin</Link>}
      {user && <Link to="/my-posts">Mis posts</Link>}
      {user && <Link to="/my-account">Mi Cuenta</Link>}
      {user && <button className="logout" onClick={() => dispatch(logoutUser())}>Logout</button>} {/*si existe usuario muestra el botton de logout*/}
      {user && <h3>Bienvenido {user.name}</h3>}
      <LanguageSelector/>
    </div>
  )
};

export default Navbar;