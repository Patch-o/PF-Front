import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateUser } from '../../redux/auth/auth.actions';



const INITIAL_STATE = {
    age: "",
    phone: "",
    Linkedin: "",
    Gitplatform: "",
    Vercel: "",
  };
  
  const FormProfile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {error,user} = useSelector(state => state.auth);
    const [form, setForm] = useState(INITIAL_STATE);
  
    const submit = (ev) => {
      ev.preventDefault();
      dispatch(updateUser(form, navigate,user))
    };
  
    const changeInput = (ev) => {
      const { name, value } = ev.target;
  
    //   if(value) ev.target.setCustomValidity('');
  
      setForm({
        ...form,
        [name]: value,
      });
    };
    function handleClick(e){
      e.preventDefault();
      document.getElementById('id1').style.display="none"
    }
    // const setCustomMessage = (ev) => {
    //   ev.target.setCustomValidity('Debes completar este campo, no seas tramposo');
    // }
  
    return (
      <div >
        
        <form onSubmit={submit}>
          <label>
            <p>Edad</p>
            <input type="number" name="age" value={form.age} onChange={changeInput}/>
          </label>
          <label>
            <p>Teléfono</p>
            <input type="text" name="phone" value={form.phone} onChange={changeInput}/>
          </label>
          <label>
            <p>Linkedin</p>
            <input type="text" name="Linkedin" value={form.Linkedin} onChange={changeInput} />
          </label>
          <label>
            <p>Plataforma de Git preferida</p>
            <input type="text" name="Gitplatform" value={form.Gitplatform} onChange={changeInput} />
          </label>
          <label>
            <p>Vercel</p>
            <input type="text" name="Vercel" value={form.Vercel} onChange={changeInput} />
          </label>
          <button type="submit">Actualizar perfil</button>
        </form>
        {error && <h2 className="error">{error}</h2>}     {/*si hay error nos lo muestra*/}
      <div>
        
      <button type='button' onClick={handleClick}> Vuelve a tu perfil</button>
      </div>
      </div>
    );
  };
  
  export default FormProfile;
  
