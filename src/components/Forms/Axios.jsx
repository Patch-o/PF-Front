import axios from "axios";
import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';

const Axios = () => {
  const [usuarios, setUsuarios] = useState();
  const {id} = useParams();
  const getUsuarios = async () => {
    const res = await axios.get(`http://localhost:4500/users/`); /// `http://localhost:4500/users/${_id}`
     console.log(res);
    setUsuarios(res.data);
  };

  useEffect(() => {
    getUsuarios();
  }, []);

  return (
    <div className='cardsProfile' >
      {usuarios &&
        usuarios.map((usuario) => {
          return (
            <div className="cardsProfile lateral"  key={usuario.name}>

        <p>{usuario.email}</p>
        <p>{usuario.name}</p>
        <p>{usuario.age}</p>
              
            </div>
          );
        })}
    </div>
  );
};

export default Axios;
