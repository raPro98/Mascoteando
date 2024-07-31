import React from "react";
import logoMascoteando from "/img/mtlogo.png"
import CartWidget from "./CartWidget";
import "./NavBar.css"
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="fondoNav">
      <nav className="mt-0 container-lg flexBetween">
        <Link to="/"><img src={logoMascoteando} width={100} alt="Logo Mascoteando" /></Link>
        <ul className="d-flex justify-content-center align-items-center container-lg lista m-0">
          <li className="list-unstyled px-3"><Link to="/">Todo</Link></li>
          <li className="list-unstyled px-3"><Link to="/categoria/id/alimentos">Alimentos</Link></li>
          <li className="list-unstyled px-3"><Link to="/categoria/id/accesorios">Accesorios</Link></li>
          <li className="list-unstyled px-3"><Link to="/categoria/id/farmacia">Farmacia</Link></li>
        </ul>
        <CartWidget />
      </nav>
    </div>
  );
};

export default NavBar;
