import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar";
import Main from "./components/main";
import Consultas from "./components/consultas";
import Eliminar from "./components/eliminar";
import Agregar from "./components/agregar";


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
