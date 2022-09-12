import ControlledCarousel from "../components/Carrrousel";
import "./../components/Footer.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div className="cards">
      <h1>PAGINA SOBRE NOSOTROS</h1>
      <h1>Aquí ira un poco de información sobre nosotros</h1>
      <ControlledCarousel />
    </div>
  );
};

export default About;
