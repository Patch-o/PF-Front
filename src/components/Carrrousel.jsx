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
          <p>Comida favorita: </p>
          <p>Serie que veríamos 1000 veces: </p>
          <p>Un lugar en el mundo: Roma</p>
          <p>Canción que cantas en la ducha: </p>
          <p>Pizza con o sin piña: </p>
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
          <p>Comida favorita:  tarta de galletas de la abuela</p>
          <p>Serie que veríamos 1000 veces: Como conocí a vuestra madre / New Girl</p>
          <p>Un lugar en el mundo: Roma</p>
          <p>Canción que cantas en la ducha: coldplay - viva la vida</p>
          <p>Pizza con o sin piña: ¡SIN!</p>
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
          <p>Comida favorita: </p>
          <p>Serie que veríamos 1000 veces: </p>
          <p>Un lugar en el mundo: Roma</p>
          <p>Canción que cantas en la ducha: </p>
          <p>Pizza con o sin piña: </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Forth slide"
        />

        <Carousel.Caption>
        <div className="text__content">
          <h1>Javi</h1>
          <p>Comida favorita: </p>
          <p>Serie que veríamos 1000 veces: </p>
          <p>Un lugar en el mundo: Roma</p>
          <p>Canción que cantas en la ducha: </p>
          <p>Pizza con o sin piña: </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
