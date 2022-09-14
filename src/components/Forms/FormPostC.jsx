import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { newPost } from "../../redux/auth/auth.actions";
import './FormPost.scss';
import { useForm } from 'react-hook-form';
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
  const {register, handleSubmit} = useForm();

  const submit = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("image", data.image[0]);
    formData.append("text", data.text);
    dispatch(newPost(formData, navigate, user._id))
    
  };

  const setCustomMessage = (ev) => {
    ev.target.setCustomValidity('Debes completar este campo, no seas tramposo');
  }

  return (
    <div className="formpost-container" >
      
      <form onSubmit={handleSubmit(submit)}>
        <label>
          <p>Titulo</p>
          <input type="text" {...register("title")} required/>
        </label>
        <label>
          <p>Imagen</p>
          <input type="file"  {...register("image")} required />
        </label>
        <label>
          <p>Descripción</p>
          <textarea type="textarea" {...register("text")} required />
        </label>
        {/* <Navigate to="/eeeeeeh" /> */}
        <br />
        <button type="submit">Enviar Post 🐦</button>
      </form>
      {error && <h2 className="error">{error}</h2>}     {/*si hay error nos lo muestra*/}
    </div>
  );
};

export default FormPostC;

