import React from 'react';
import "./Navbar.css"
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Agendamentos</div>
      <div className="navbar-links">
          <NavLink to={"/"}> Adicionar Usuários</NavLink>
          <NavLink to={"user/add"}> Listar Usuários </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;