import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const ItemDetail = () => {
  const Location = useLocation();
  const params = useParams();

  const producto = [
    {
      id: 1,
      nombre: "The Flash",
      imagen:
        "https://es.web.img2.acsta.net/pictures/17/09/29/21/15/4233147.jpg",
      descripcion:
        "Nueve meses después de que el laboratorio S.T.A.R. explotara, Barry despierta del coma y descubre que tiene el poder de la súper velocidad. Con la ayuda de su nuevo equipo, Barry, denominado ahora `Flash', luchará contra el crimen en Ciudad Central.",
      temporadas: 8,
      episodios: 164,
      calidad: "full HD / 4k",
    },
    {
      id: 2,
      nombre: "ARROW",
      imagen:
        "https://images-na.ssl-images-amazon.com/images/I/91s48tDAHSL.jpg",
      descripcion:
        "Cuando Oliver Queen, un billonario mujeriego, que se presumía había fallecido, regresa a casa a la ciudad Starling, luego de cinco años de quedar atrapado en una isla remota en el Pacífico, él esconde los cambios creados por la experiencia en sí mismo, mientras busca la reconciliación con su ex Laurel; él secretamente lleva dos vidas paralelas, en el día actúa como el filántropo descomplicado que solía ser y en la noche saca a relucir su ego alterno como Arrow. Este personaje es una clase de super héroe que trata de corregir los errores de su familia y restaurar la gloria que tenía la ciudad previamente, su misión se complica por el padre de Laurel, quien es el detective Quentin Lance y está determinado a poner al vigilante en la cárcel.",
      temporadas: 8,
      episodios: 170,
      calidad: "full HD / 4k",
    },
    {
      id: 3,
      nombre: "SUPERGIRL",
      imagen:
        "https://img-lesbosfera.s3.eu-west-1.amazonaws.com/wp-content/uploads/20200804213213/supergirl-serie-lesbianas.jpg",
      descripcion:
        "Con tan sólo 13 años de edad, Kara Zor-El es enviada a la Tierra para cuidar de su primo, Superman. Y a los 24 años, Kara revela al mundo sus poderes y empieza a trabajar para una agencia paraestatal con vida extraterrestre en la Tierra.",
      temporadas: 6,
      episodios: 126,
      calidad: "full HD / 4k",
    },
    {
      id: 4,
      nombre: "DR. HOUSE",
      imagen:
        "https://m.media-amazon.com/images/I/71q5M19-XxL._SL1500_.jpg",
      descripcion:
        "En el Princenton Plainsboro de Nueva Jersey, el Dr. Gregory House, un singular genio de la medicina, se encarga de resolver casos como lo haría Sherlock Holmes. De forma astuta juega con la psicología de la Dra. Lisa Cuddy, su mejor amigo, el oncólogo James Wilson, y del resto de su equipo de trabajo.",
      temporadas: 8,
      episodios: 177,
      calidad: "full HD / 4k",
    },
    {
      id: 5,
      nombre: "THE GOOD DOCTOR",
      imagen:
        "https://es.web.img3.acsta.net/pictures/18/09/20/17/08/1922378.jpg",
      descripcion:
        "Un cirujano joven y autista que padece el síndrome del sabio empieza a trabajar en un hospital prestigioso. Allá tendrá que vencer el escepticismo con el que sus colegas lo reciben.",
      temporadas: 5,
      episodios: 92,
      calidad: "full HD / 4k",
    },
    {
      id: 6,
      nombre: "GREY'S ANATOMY",
      imagen:
        "https://es.web.img3.acsta.net/pictures/17/08/31/11/11/518307.jpg",
      descripcion:
        "Un drama que se enfoca en el personaje de Merdith Grey, una integrante de un grupo de doctores jóvenes en el hospital de Seattle. La hija de una famosa cirujana, que lucha para mantener sus relaciones con sus colegas.",
      temporadas: 18,
      episodios: 381,
      calidad: "full HD / 4k",
    },
  ];
  
  const productoId = producto.find((e) => e.id == `${params.id}`);
  
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div
              className="card"
              style={{ width: "22rem", margin: "10px auto" }}
            >
              <img src={productoId.imagen} className="card-img-top" alt="..." />
            </div>
          </div>

          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title text-center">{productoId.nombre}</h5>
              <p className="card-text">{productoId.descripcion}</p>
              <ul>
                <li> Cantidad de Temporadas: {productoId.temporadas}</li>
                <li>N° de Episodios: {productoId.episodios}</li>
                <li>Calidad de Vídeo: {productoId.calidad}</li>
              </ul>
              <a href="#" className="btn btn-primary">
                Comprar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
