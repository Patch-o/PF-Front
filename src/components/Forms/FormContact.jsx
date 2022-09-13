import React from 'react'
import { useForm, ValidationError } from '@formspree/react';


function ContactForm() {
  const [state, handleSubmit] = useForm("mlevgyag");
  if (state.succeeded) {
      return <p>¡¡Gracias por contactar con nosotros!!</p>;
  }
  return (
      <form onSubmit={handleSubmit} action="https://formspree.io/f/mlevgyag" method="POST"> 
      {/* en el campo action va el codigo de la pagina */}

        <label htmlFor="email">Email</label>
        <input id="email" type="email"  name="email" required placeholder='¡Escribe aqui tu email para ponernos en contacto contigo!'/>
            <ValidationError prefix="Email" field="email" errors={state.errors}/>

        <label htmlFor="email">Mensaje</label>
        <textarea id="message"name="message" required placeholder='¡Hola!Cuentanos...'/>
            <ValidationError prefix="Message" field="message"errors={state.errors}/>

      <button type="submit" disabled={state.submitting}>Submit</button>
    </form>
  );

}

export default ContactForm