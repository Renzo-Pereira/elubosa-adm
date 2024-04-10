import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="main">
      <Link to="/agregar">
        <div className="main-cards">
          <h2>
            <i class="bi bi-cloud-arrow-up"></i>
          </h2>
          <h3>Agregar producto</h3>
        </div>
      </Link>
      <Link to="/eliminar">
        <div className="main-cards">
          <h2>
            <i class="bi bi-trash"></i>
          </h2>
          <h3>Eliminar producto</h3>
        </div>
      </Link>
      <Link to="/consultas">
        <div className="main-cards">
          <h2>
            <i class="bi bi-envelope"></i>
          </h2>
          <h3>Consultas</h3>
        </div>
      </Link>
    </div>
  );
};

export default Main;
