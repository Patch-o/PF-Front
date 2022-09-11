//import { useDispatch, useSelector } from 'react-redux';
//import { logoutUser } from '../redux/auth/auth.actions';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
    <Link to="/">FAQ</Link>
    <Link to="/ticket">CREAR TICKET</Link>
    <Link to="/contact">CONTACTO</Link>
    <Link to="/about">SOBRE NOSOTROS</Link>
  </div>
  )
};

export default Footer;
