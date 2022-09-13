import "./acordeon.scss";

const Acordeon = () => {
  return (
    <div className="center">
       <div class="accordion">
     <input type="radio" name="select" class="accordion-select" checked />
    <div class="accordion-title"><span>¿QUE ES POTATOE .NET?</span></div>
    <div class="accordion-content">
    <p>POTATOE.NET Es una red social para desarrolladores.</p>
    <p>Aqui podrás colgar tus proyectos y compartirlos con otros desarrolladores.</p>
    <p>Muestra a tus compañeros lo que sabes hacer.</p>
    </div> 
         <input type="radio" name="select" class="accordion-select" />
    <div class="accordion-title"><span>¿QUE TENGO QUE HACER PARA CREAR UNA CUENTA?</span></div>
    <div class="accordion-content">
    <p>¡ES MUY FACIL!</p>
    <p>Solo tienes que ir a Register y poner tu nombre, email y una contraseña.</p>
    <p>¡No pedimos más datos!</p>
    <p>Eso si, luego puedes modificar tu perfil y añadir un poco más de información sobre ti.</p>
    </div> 
         <input type="radio" name="select" class="accordion-select" />
    <div class="accordion-title"><span>¿QUE ES EL TOP GALAXY?</span></div>
    <div class="accordion-content">
    <p>Es nuestro top post de la semana.</p>
    <p>Cada semana se mostrarán los post con más me gusta en nuestro carrusel.</p>
    <p>Si quieres aparecer ahí, sube una imagen de tu proyecto y que tus compañeros voten.</p>
    </div> 
         <input type="radio" name="select" class="accordion-select" />
         </div>
    </div>
  );
};

export default Acordeon;
