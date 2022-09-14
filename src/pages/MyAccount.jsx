//import FormPost from "../components/Forms/FormPost";
import { useSelector } from "react-redux";

import FormPostC from "../components/Forms/FormPostC";
import FormProfile from "../components/Forms/FormProfile";

const MyAccount = () => {
  const { user } = useSelector((state) => state.auth);
  var modal = document.getElementById('id1')
  window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }    
}
  function handleClick(e){
    e.preventDefault();
    document.getElementById('id1').style.display="block"
  }
  return (
    <div className="form-container">
      
      <div className="cardsProfile">
        <div className="profileForm">
          {user && <p>Nombre:<h2> {user.name}</h2></p>}
          {user && <p>Email: <h2>{user.email}</h2></p>}
          {user && <p>Edad: <h2>{user.age}</h2></p>}
          {user && <p>Linkedin:<h2> {user.Linkedin}</h2></p>}
          {user && <p>Git: <h2>{user.Gitplatform}</h2></p>}
          {user && <p>Vercel: <h2>{user.Vercel}</h2></p>}
        <button type="button"
        onClick={handleClick}
          >Edita tu perfil✏️</button>
       
        </div>
        <div id={'id1'} className="modal profileForm">
          <FormProfile />
        </div>


        <div className=" postForm">
          <FormPostC />
        </div>
     
      </div>
    </div>
  );
};

export default MyAccount;
