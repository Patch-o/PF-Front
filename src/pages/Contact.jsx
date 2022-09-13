import ContactForm from '../components/Forms/FormContact';
import './../components/Footer.scss';

const Contact = () => {
    return (
      <div className="cards">
        <h1>CONTACTA CON NOSOTROS</h1>
        <p>¿Necesitas comentarnos algo?</p>
        <p>Puedes comentarnos un problema o contarnos que habeis comido hoy, eso lo dejamos a vuestra elección.</p>
        <p>¡Ponte en contacto a través de este formulario!</p>
        <ContactForm />

      </div>
    )
  };
  
  export default Contact;