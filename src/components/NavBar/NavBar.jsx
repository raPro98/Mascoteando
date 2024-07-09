import React from "react";
import logoMascoteando from "../../img/mtlogo.png"
import CartWidget from "./CartWidget";
import "./NavBar.css"

const NavBar = () => {
  return (
    <div className="fondoNav">
      <nav className="mt-0 container-lg flexBetween">
        <img src={logoMascoteando} width={100} alt="Logo Mascoteando" />
        <ul className="d-flex justify-content-center align-items-center container-lg lista m-0">
          <li className="list-unstyled px-3"><a href="">Alimentos</a></li>
          <li className="list-unstyled px-3"><a href="">Accesorios</a></li>
          <li className="list-unstyled px-3"><a href="">Farmacia</a></li>
          <li className="list-unstyled px-3"><a href="">Contacto</a></li>
        </ul>
        <CartWidget />
      </nav>
    </div>
  );
};

export default NavBar;
