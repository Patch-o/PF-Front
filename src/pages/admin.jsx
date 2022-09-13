import React, { useEffect, useState } from 'react';
import Axios from '../components/Forms/Axios';
import axios from 'axios';
import { useParams, useResolvedPath } from 'react-router-dom';
import { Button } from 'reactstrap';


const Admin = () => {
    const [usuarios, setUsuarios] = useState([]);
    const getUsuarios = async () => {
      const res = await axios.get(`http://localhost:4500/users/`); /// `http://localhost:4500/users/${_id}`
  
      setUsuarios(res.data);
    };
  
    useEffect(() => {
      getUsuarios();
    }, []);
  

  return (
    <div className='cardProfile'>
    <Axios />

    </div>
  )
}

export default Admin;