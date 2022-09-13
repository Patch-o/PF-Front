
//import FormPost from "../components/Forms/FormPost";
import { useSelector } from "react-redux";
import Axios from "../components/Forms/Axios";
import FormPostC from "../components/Forms/FormPostC";
import FormProfile from "../components/Forms/FormProfile";


const MyAccount = () => {
  const { user } = useSelector(state => state.auth);
  return (
    <div className="cardsProfile">
    
    <div className="profileForm">
      <FormProfile />
    </div>
    
      <div className="profileForm">
        {user && <p>Nombre: {user.name}</p>}
        {user && <p>Email: {user.email}</p>}
        {user && <p>id: {user._id}</p>}
        {user && <p>Edad: {user.age}</p>}
        {user && <p>Linkedin: {user.Linkedin}</p>}
        {user && <p>Git: {user.gitplatform}</p>}
        {user && <p>Vercel: {user.Vercel}</p>}
      </div>

      <div className="postForm">
      <FormPostC />
      </div>

    </div>
    
  )
};

export default MyAccount;