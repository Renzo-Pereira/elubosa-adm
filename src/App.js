import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/navbar";
import Main from "./components/main/main";
import Consultas from "./components/consultas/consultas";
import Eliminar from "./components/eliminar/eliminar";
import Agregar from "./components/agregar/agregar";


function App() {
  return(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/agregar" element={<Agregar />}></Route>
      <Route path="/eliminar" element={<Eliminar />}></Route>
      <Route path="/consultas" element={<Consultas />}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
