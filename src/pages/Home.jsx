import ControlledCarousel from "../components/Carrrousel";
import LibraryPost from "../components/Librarys/LibraryPost";
import home from "./home.scss";





const Home = () => {
  return (
    <div className="cards">
      <h1>POST</h1>
      {/* <div><LibraryPost /></div> */}
      <ControlledCarousel/>
    </div>
  )
};

export default Home;