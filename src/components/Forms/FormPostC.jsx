import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { newPost } from "../../redux/auth/auth.actions";
import './FormPost.scss';
//import { registerUser } from "../redux/auth/auth.actions";

const INITIAL_STATE = {
  title: "",
  image: "",
  text: "",
};

const FormPostC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {error, user} = useSelector(state => state.auth);
  const [form, setForm] = useState(INITIAL_STATE);

  const submit = (ev) => {
    ev.preventDefault();
    dispatch(newPost(form, navigate, user._id))
    
  };

  const changeInput = (ev) => {
    const { name, value } = ev.target;

    if(value) ev.target.setCustomValidity('');

    setForm({
      ...form,
      [name]: value,
    });
  };

  const setCustomMessage = (ev) => {
    ev.target.setCustomValidity('Debes completar este campo, no seas tramposo');
  }

  return (
    <div >
      
      <form onSubmit={submit}>
        <label>
          <p>Titulo</p>
          <input type="text" name="title" value={form.title} onChange={changeInput} required/>
        </label>
        <label>
          <p>Imagen</p>
          <input type="file" name="image" value={form.image} onChange={changeInput} required />
        </label>
        <label>
          <p>Descripción</p>
          <textarea type="textarea" name="text" value={form.text} onChange={changeInput} title="" />
        </label>
        {/* <Navigate to="/eeeeeeh" /> */}
        <br />
        <button type="submit">Enviar Post</button>
      </form>
      {error && <h2 className="error">{error}</h2>}     {/*si hay error nos lo muestra*/}
    </div>
  );
};

export default FormPostC;
