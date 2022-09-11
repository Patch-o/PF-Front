
//import FormPost from "../components/Forms/FormPost";
import Axios from "../components/Forms/Axios";
import FormPostC from "../components/Forms/FormPostC";
import FormProfile from "../components/Forms/FormProfile";


const MyAccount = () => {
  
  return (
    <div className="cardsProfile">
    <Axios/>
      <div className="profileForm"><FormProfile /></div>

      <div className="postForm"><FormPostC /> </div>

    </div>
    
  )
};

export default MyAccount;