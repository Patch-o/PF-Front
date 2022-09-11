import React from 'react'
import { useForm } from 'react-hook-form'


const FormProfile = () => {
    const{ register, handleSubmit }=useForm();

    const onSubmit=(data)=>{
        console.log(data);
    }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <p>Edad</p>
                <input type="number" {...register('age')} />
                <p>Teléfono</p>
                <input type="text" maxLength={12} {...register('phone')} />
                <p>Linkedin</p>
                <input type="text" {...register('Linkedin')}/>
                <p>Plataforma de Git preferida</p>
                <input type="text" {...register('Gitplatform')}/>
                <p>Vercel</p>
                <input type="text" {...register('Vercel')}/>
                <button>Actualizar perfil</button>
            </div>
        </form>
      
    </div>
  )
}

export default FormProfile
