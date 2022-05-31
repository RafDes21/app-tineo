import React from "react";
import logo from "../img/logo.png";
import "./navBar.css";
import CardWidget from "../components/CartWidget";
import {Link} from "react-router-dom";

export default function NavBar() {

 return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark  ">
      <div className="container">
        <Link to={"/"}>
        <a className="navbar-brand">
          <img src={logo} alt="" width="80" height="60" />
        </a>
        </Link>
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
          <div className="navbar-nav " style={{display:"flex",alignItems:"center"}}>
           
            <Link className="navbar-nav link nav-link m-0" style={{color:"rgb(0, 255, 255,1)"}} to={"/"}>Catálogo</Link>
         
            <ul className="navbar-nav p-0 m-0">
              <li className="nav-item dropdown w-100 mt-2 my-lg-0">
                <a
                  className="nav-link dropdown-toggle border border-dark rounded  px-2 "
                  id="navbarDropdown"
                  role="button"
                  href="/"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categorias
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link active="true" to={"/categorias/comics"} className="dropdown-item">Comimcs</Link>
                  </li>
                  <li>
                    <Link active="true"to={"/categorias/medicina"} className="dropdown-item">Medicina</Link>
                  </li>
                  <li>
                    <Link active="true" to={"/categorias/drama"}  className="dropdown-item">Drama</Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="CartWidget">
                <CardWidget/>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
            
