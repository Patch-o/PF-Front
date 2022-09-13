import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Carrusel.scss";


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carrusel-container">
      
    <div className="carrusel">
      
    <Carousel activeIndex={index} onSelect={handleSelect}>

      <Carousel.Item>
        <img
          className="item__img"
          src="https://cdn.discordapp.com/attachments/1014921169595531369/1018924298901131345/myAvatar.png"
          alt="First slide"
        />
        <Carousel.Caption >
        <div className="text__content">
          <h1>Boris</h1>
          <p>Comida favorita: <b>🍣 🍝 🍍</b> </p>
          <p>Serie que veríamos 1000 veces: <b>One piece</b> </p>
          <p>Un lugar en el mundo: <b>Japon</b></p>
          <p>Canción que cantas en la ducha: <b>Master of puppets</b> </p>
          <p>Pizza con o sin piña:<b>!🍍</b> </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="item__img"
          src="https://cdn.discordapp.com/attachments/1014921169595531369/1018910916802265088/myAvatar.png"
          alt="Second slide"
        />

        <Carousel.Caption>
        <div className="text__content">
          <h1>Joanne</h1>
          <p>Comida favorita: <b>Tarta de galleta de la abuela 🍰🍪</b> </p>
          <p>Serie que veríamos 1000 veces: <b>Como conocí a vuestra madre || New Girl</b> </p>
          <p>Un lugar en el mundo: <b>Roma</b></p>
          <p>Canción que cantas en la ducha: <b>Viva la vida- Coldplay</b> </p>
          <p>Pizza con o sin piña: <b>!🍍</b> </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="item__img"
          src="https://cdn.discordapp.com/attachments/1014921169595531369/1018910714322235402/myAvatar.png"
          alt="Third slide"
        />

        <Carousel.Caption>
        <div className="text__content">
          <h1>Gonzalo</h1>
          <p>Comida favorita: <b>Tortellini de calabaza con gorgonzola</b> </p>
          <p>Serie que veríamos 1000 veces: <b>It's always sunny in philladelphia</b> </p>
          <p>Un lugar en el mundo: <b>Ria de Sada</b></p>
          <p>Canción que cantas en la ducha: <b>Rick astley-"Never gonna give you up"</b> </p>
          <p>Pizza con o sin piña: <b>!🍍</b> </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

           <Carousel.Item>
        <img
          className="item__img"
          src="https://cdn.discordapp.com/attachments/1014921169595531369/1019270223662166056/myAvatar.png"
          alt="Fourth slide"
        />

        <Carousel.Caption>
        <div className="text__content">
          <h1>Javier</h1>
          <p>Comida favorita:     <b>comida gallega</b> </p>
          <p>Serie que veríamos 1000 veces: <b>Mr. Robot ⌨️|| Okupas ⭐</b> </p>
          <p>Un lugar en el mundo: <b>Ria de Sada</b></p>
          <p>Canción que cantas en la ducha: <b>Maryjane(RICK JAMES)</b> </p>
          <p>Pizza con o sin piña: <b>🍍</b> </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>

    </div>
    </div>
  );
}

export default ControlledCarousel;
