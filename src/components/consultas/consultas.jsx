import { db } from "../../firebase/config";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { useState, useEffect } from "react";

const Consultas = () => {
  const [consultas, setConsultas] = useState([]);

  useEffect(() => {
    const consultasRef = collection(db, "consultas");

    getDocs(consultasRef).then((resp) => {
      setConsultas(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, [consultas]);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "consultas", id));
  };
  return (
    <div className="consultas">
      {consultas.map((data) => (
        <div className="consultas-filas" key={data.id}>
          <h2>Nombre:</h2> <p>{data.Consulta.nombre}</p>
          <h2>Email:</h2> <p>{data.Consulta.email}</p>
          <h2>Asunto:</h2> <p> {data.Consulta.asunto}</p>
          <h2>Consulta:</h2> <p>{data.Consulta.consulta}</p>
          <button type="button" onClick={() => handleDelete(data.id)}>
            <i class="bi bi-trash"></i>
          </button>
        </div>
      ))}
    </div>
  );
};
  
  export default Consultas;
  