import { db } from "../../firebase/config";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { useState, useEffect } from "react";

const Eliminar = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const productosRef = collection(db, "productos");

    getDocs(productosRef).then((resp) => {
      setProductos(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, [productos]);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "productos", id));
  };
  return (
    <div className="productos">
      {productos.map((prod) => (
        <div className="productos-filas" key={prod.id}>
          <img src={prod.imagenUrl} alt={prod.titulo} />
          <h2>{prod.titulo}</h2>
          <h2>$ {prod.precio}</h2>
          <button type="button" onClick={() => handleDelete(prod.id)}>
            <i class="bi bi-trash"></i>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Eliminar;
