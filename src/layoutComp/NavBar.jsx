import React from "react";
import logo from "../logo.svg";
import "./navBar.css";
import CardWidget from "../components/CartWidget";
import {Link} from "react-router-dom";


export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light  ">
      <div className="container">
        <a className="navbar-brand">
          <img src={logo} alt="" width="60" height="60" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ">
           
            {/* <Link className="navbar-nav link" to={"/"}>Inicio</Link> */}
            <Link className="navbar-nav link" to={"/lista"}>Productos</Link>
            <Link className="navbar-nav link" to={"/detalles"}>Detalles</Link>
            
            <div className="CartWidget">
                <CardWidget/>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
