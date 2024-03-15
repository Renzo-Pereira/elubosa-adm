import { useState, useRef } from "react";
import { db, storage } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Agregar = () => {
  const productosRef = collection(db, "productos");
  const [titulo, setTitulo] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState(null);
  const [imagenUrl, setImagenUrl] = useState(null); // Agregar estado para la URL de la imagen
  const inputRef = useRef(null); // Referencia al input de tipo file

  const handleTituloChange = (event) => {
    setTitulo(event.target.value);
  };

  const handlePrecioChange = (event) => {
    setPrecio(event.target.value);
  };

  const handleImagenChange = (event) => {
    if (event.target.files[0]) {
      setImagen(event.target.files[0]);
      const url = URL.createObjectURL(event.target.files[0]); // Crear una URL para la imagen seleccionada
      setImagenUrl(url); // Establecer la URL de la imagen en el estado
    }
  };

  const handleFotoClick = () => {
    // Simular clic en el input de tipo file al hacer clic en el botón de foto
    inputRef.current.click();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Subir imagen a Firebase Storage
    const storageRef = ref(storage, `imagenes/${imagen.name}`);
    await uploadBytes(storageRef, imagen);

    // Obtener la URL de la imagen subida
    const imageUrl = await getDownloadURL(storageRef);

    await addDoc(productosRef, {
      titulo: titulo,
      precio: precio,
      imagenUrl: imageUrl,
    });
    // Limpiar los campos después de agregar el producto
    setTitulo("");
    setPrecio("");
    setImagen(null);
    setImagenUrl(null); // Limpiar la URL de la imagen
  };

  return (
    <div className="contenedor-agregar">
      <button className="foto" style={{ backgroundImage: `url(${imagenUrl})` }} onClick={handleFotoClick}>
        {imagenUrl ? null : <i className="bi bi-folder-plus"></i>}
        <input
          ref={inputRef}
          type="file"
          id="imagen"
          accept="image/*"
          onChange={handleImagenChange}
          style={{ display: 'none' }} // Ocultar el input file
        />
      </button>
      <div className="inputs">
        <label htmlFor="titulo">Titulo</label>
        <input
          name="titulo"
          type="text"
          value={titulo}
          onChange={handleTituloChange}
        />
        <label htmlFor="precio">Precio</label>
        <input
          name="precio"
          type="number"
          value={precio}
          onChange={handlePrecioChange}
        />
        <button onClick={handleSubmit}>Agregar</button>
      </div>
    </div>
  );
};

export default Agregar;
