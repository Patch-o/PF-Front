import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/json';

const BASE_URL = 'http://localhost:4500'; // url del backend

//trata de registrar el usuario en nuestra API y devuelve la respuesta de la API
export const register = async (user) => {
  console.log(user)
  try {
    const res = await axios.post(`${BASE_URL}/users/register`, user, { withCredentials: true });
    return res.data;
  } catch(error) {
    return error.response.data;
  }
}

//trata de loguear el usuario en nuestra API y devuelve la respuesta de la API
export const login = async (user) => {
  try {
    const res = await axios.post(`${BASE_URL}/users/login`, user, { withCredentials: true });
    return res.data;
  } catch(error) {
    return error.response.data;
  }
}

//lanza a la API la petición para desloguear el usuario
export const logout = async (user) => {
  try {
    await axios.post(`${BASE_URL}/users/logout`, {}, { withCredentials: true });
    return null;
  } catch(error) {
    return error.response.data;
  }
}

//CheckSession consulta a la API si hay un usuario ya logueado y si está la API nos devuelve ese usuario
export const checkSession = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/users/check-session`, { withCredentials: true });
    return res.data;
  } catch(error) {
    console.log('error', error);
  }
}


//post
export const registerP = async (form) => {
  console.log(form)
  try {
    const res = await axios.post(`${BASE_URL}/post/post`, form, { withCredentials: true });
    return res.data;
  } catch(error) {
    return error.response.data;
  }
}

//Profile

export const profilePut = async (form, user ) => {
   console.log(user,form)
  try {
    // const res = await axios.put(`${BASE_URL}/users/update/${id}`, user, form, { withCredentials: true });
    // return res.data;
 const {password,...restUser}=user
    const updatedUser = {...restUser, ...form };
    console.log(updatedUser)
    const res = await axios.put(`${BASE_URL}/users/update/${user._id}`, updatedUser, { withCredentials: true });
    return updatedUser;

  } catch(error) {
    console.error(error)
    return error.response.data;
  }
}

export const addPostToUser = async (idUser, idPost) => {

  try{

    const data = await axios.get(`${BASE_URL}/users/${idUser}` , { withCredentials: true } );
    const user = data.data;
    const newUser = {...user, posts: [...user.posts, idPost] };
    console.log(newUser);
    const res = await axios.put(`${BASE_URL}/users/update/${idUser}`, newUser, { withCredentials: true });
    return res.data;
  }catch(error) {
    return error.response.data;
  }
}

export const getAllPosts = async (posts) => {
  console.log(posts);

}