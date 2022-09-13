
import LibraryPost from "../components/Librarys/LibraryPost";
import home from "./home.scss";
import { FormattedMessage } from "react-intl"




const Home = () => {
  return (
    <div className="cards">
    <h1>
    <FormattedMessage
      id="home.title"
      defaultMessage="Bienvenidos a CHADLAND"
    /></h1>
     
      
    
    </div>
  )
};

export default Home;