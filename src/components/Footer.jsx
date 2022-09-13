//import { useDispatch, useSelector } from 'react-redux';
//import { logoutUser } from '../redux/auth/auth.actions';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer-container'>
      
    <div className='footer'>
{/* pagina NO creada */}
    <Link to="/faq">FAQ</Link>
{/* pagina NO creada */}
    {/* <Link to="/ticket">CREAR TICKET</Link> */}


{/* pagina creada */}
    <Link to="/contact">CONTACTO</Link>
{/* pagina creada */}
    <Link to="/about">SOBRE NOSOTROS</Link>
  </div>
    </div>
  )
};

export default Footer;
