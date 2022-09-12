import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../redux/auth/auth.actions";

const INITIAL_STATE = {
  email: "",
  password: "",
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, isLoading } = useSelector(state => state.auth);
  const [form, setForm] = useState(INITIAL_STATE);

  const submit = (ev) => {
    ev.preventDefault();
    dispatch(loginUser(form, navigate)); //lanzamos la función loginUser que recibimos por props y que conecta con nuestra API, tratamos de loguear al usuario
  };

  const changeInput = (ev) => {
    const { name, value } = ev.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div className="cards">
      <h3>Login Page</h3>
      {isLoading && <h2>Logeando usuario...</h2>}
      {!isLoading && <form onSubmit={submit}>
        <label>
          <h3>Email</h3>
          <input type="email" name="email" value={form.email} onChange={changeInput} required />
        </label>
        <label>
          <h3>Password</h3>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={changeInput}
            required
            pattern="(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}"
            title="La contraseña no cumple las reglas. 8 carácteres, 1 mayúscula y 1 número"
          />
        </label>

        <br />
        <button type="submit"><h1>Acceder</h1></button>
      </form>}
      {error && <h2 className="error">{error}</h2>}     {/*si hay error nos lo muestra*/}
    </div>
  );
};

export default Login;