import { useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

    useEffect(() => {
  const nav = document.querySelector("#nav");
  const abrir = document.querySelector("#abrir");
  const cerrar = document.querySelector("#cerrar");
  const promos = document.querySelector("#promos");

  if (abrir) {
    abrir.addEventListener("click", () => {
      nav.classList.add("visible");
    });
  }

  if (cerrar) {
    cerrar.addEventListener("click", () => {
      nav.classList.remove("visible");
    });
  }

  if (promos) {
    promos.addEventListener("click", () => {
      nav.classList.remove("visible");
    });
  }

})

  return (
    <div>
      <header>
        <h1><Link to="/">legión</Link></h1>
        <button id="abrir" className="abrir-menu">
          <i className="bi bi-list"></i>
        </button>
        <nav className="nav" id="nav">
          <button className="cerrar-menu" id="cerrar">
            <i className="bi bi-x-lg"></i>
          </button>
          <ul className="nav-list">
            <li>
            <Link to="/">Inicio</Link>
            </li>
            <li>
            <Link to="/agregar">Agregar producto</Link>
            </li>
            <li>
            <Link to="/eliminar">Eliminar producto</Link>
            </li>
            <li>
            <Link to="/consultas">Consultas</Link>
            </li>
          </ul>
        </nav>
      </header>

    </div>
  );
};

export default NavBar;
