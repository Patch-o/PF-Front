import { checkSession, login, logout, profilePut, register, registerP, addPostToUser } from "../../api/auth.api";

export const LOGIN_USER_START = "LOGIN_USER_START";
export const LOGIN_USER_OK = "LOGIN_USER_OK";
export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";

export const REGISTER_USER_START = "REGISTER_USER_START";
export const REGISTER_USER_OK = "REGISTER_USER_OK";
export const REGISTER_USER_ERROR = "REGISTER_USER_ERROR";

export const CHECK_SESSION_START = "CHECK_SESSION_START";
export const CHECK_SESSION_OK = "CHECK_SESSION_OK";
export const CHECK_SESSION_ERROR = "CHECK_SESSION_ERROR";

export const LOGOUT_START = "LOGOUT_START";
export const LOGOUT_OK = "LOGOUT_OK";
export const LOGOUT_ERROR = "LOGOUT_ERROR";

export const REGISTER_POST_START = "REGISTER_POST_START";
export const REGISTER_POST_OK = "REGISTER_POST_OK";
export const REGISTER_POST_ERROR = "REGISTER_POST_ERROR";

export const UPDATE_USER_START = "UPDATE_USER_START";
export const UPDATE_USER_OK = "UPDATE_USER_OK";
export const UPDATE_USER_ERROR = "UPDATE_USER_ERROR";



export const loginUser = (user, navigate) => async dispatch => {
  try {
    dispatch({ type: LOGIN_USER_START });
    const response = await login(user);

    if (response && response._id) {
      // Hay usuario
      dispatch({ type: LOGIN_USER_OK, payload: response });
      navigate('/');
    } else {
      // No hay usuario
      dispatch({ type: LOGIN_USER_ERROR, payload: response });
    }
  } catch (error) {
    // Ha ocurrido algún problema haciendo el fetch o ejecutando javascript
    dispatch({ type: LOGIN_USER_ERROR, payload: error.message });
  }
};

export const registerUser = (user, navigate) => async dispatch => {
  try {
    dispatch({ type: REGISTER_USER_START });
    const response = await register(user);

    if (response && response._id) {
      // Se ha registrado el usuario
      dispatch({ type: REGISTER_USER_OK, payload: response });
      navigate('/');
    } else {
      // No se ha registrado correctamente
      dispatch({ type: REGISTER_USER_ERROR, payload: response });
    }
  } catch (error) {
    // Ha ocurrido algún problema haciendo el fetch o ejecutando javascript
    dispatch({ type: REGISTER_USER_ERROR, payload: error.message });
  }
};

export const checkUser = () => async dispatch =>  {
  try {
    dispatch({ type: CHECK_SESSION_START });
    const user = await checkSession();
    if (user) dispatch({ type: CHECK_SESSION_OK, payload: user });
    if (!user) dispatch({ type: CHECK_SESSION_ERROR });
  } catch (error) {
    dispatch({ type: CHECK_SESSION_ERROR });
  }
};

export const logoutUser = () => async dispatch => {
  try {
    dispatch({ type: LOGOUT_START });
    const error = await logout();
    if (error) {
      dispatch({ type: LOGOUT_ERROR, payload: error });
    } else {
      dispatch({ type: LOGOUT_OK, payload: error });
    }
  } catch (error) {
    dispatch({ type: LOGOUT_OK, payload: error });
  }
}


//post
export const newPost = (form, navigate, idUser) => async dispatch => {
  try {
    dispatch({ type: REGISTER_POST_START });
    const response = await registerP(form);
    console.log(response);
    if (response && response._id) {
      // Se ha registrado el usuario
      
      dispatch({ type: REGISTER_POST_OK, payload: response });
      addPostToUser(idUser, response._id);
      navigate('/');
    } else {
      // No se ha registrado correctamente
      dispatch({ type: REGISTER_POST_ERROR, payload: response });
    }
  } catch (error) {
    // Ha ocurrido algún problema haciendo el fetch o ejecutando javascript
    dispatch({ type: REGISTER_POST_ERROR, payload: error.message });
  }
};

//perfil
export const updateUser = (form, navigate,user) => async dispatch => {
  try {
    dispatch({ type: UPDATE_USER_START });
    const response = await profilePut(form, user);
    console.log(response)

    if (response && response._id) {
      // Se ha registrado el usuario
      dispatch({ type: UPDATE_USER_OK, payload: response });
      navigate('/my-account');
    } else {
      // No se ha registrado correctamente
      dispatch({ type: UPDATE_USER_ERROR, payload: response });
    }
  } catch (error) {
    // Ha ocurrido algún problema haciendo el fetch o ejecutando javascript
    dispatch({ type: UPDATE_USER_ERROR, payload: error.message });
  }
};

