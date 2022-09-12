
//import FormPost from "../components/Forms/FormPost";
import { useSelector } from "react-redux";
import Axios from "../components/Forms/Axios";
import FormPostC from "../components/Forms/FormPostC";
import FormProfile from "../components/Forms/FormProfile";


const MyAccount = () => {
  const { user } = useSelector(state => state.auth);
  return (
    <div className="cardsProfile">
    <Axios/>
      <div className="profileForm">
      {user && <h3>Nombre: {user.name}</h3>}
      {user && <h3>Email: {user.email}</h3>}
      {user && <h3>id: {user._id}</h3>}
      {user && <h3>Edad: {user.age}</h3>}
      {user && <h3>Linkedin: {user.Linkedin}</h3>}
      {user && <h3>Git: {user.gitplatform}</h3>}
      {user && <h3>Vercel: {user.Vercel}</h3>}



      <FormProfile />
      </div>

      <div className="postForm"><FormPostC /> </div>

    </div>
    
  )
};

export default MyAccount;