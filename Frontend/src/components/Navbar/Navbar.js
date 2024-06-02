import React, {useState} from 'react';
import "./Navbar.css"
import {NavLink} from "react-router-dom";
import menu from "../../static/menu_24dp_FILL0_wght400_GRAD0_opsz24.svg"

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  }

  return (
    <nav className="navbar">
      <div className="navbar-brand">Agendamento</div>
      <div className="navbar-links">
          <div className="dropdown">
              <button className="dropbtn" onClick={toggleDropdown}>
                <img src={menu} alt={"MenuIcon"} />
              </button>
              {dropdownOpen && (
                  <div className="dropdown-content">
                      <NavLink to="/user/add">Adicionar Usuário</NavLink>
                      <NavLink to="/">Listar Usuários</NavLink>
                  </div>
              )}
          </div>
      </div>
    </nav>
  );
}

export default Navbar;