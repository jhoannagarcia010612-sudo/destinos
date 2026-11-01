import { useEffect, useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from "./footer"
import Navbar from "./components/navbar"
import Hero from "./components/hero"

function App() {
  const [destinos, setDestinos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imagen, setImagen] = useState("");
  const API = 
  import.meta.env.VITE_API_URL||
  "http://localhost:3000/api/destinos";

  // Consultar los destinos
  const cargarDestinos = async () => {
    try {
      const respuesta = await fetch(API);
      const datos = await respuesta.json();
      setDestinos(datos);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    cargarDestinos();
  }, []);

  // Agregar un destino
  const agregarDestino = async (e) => {
    e.preventDefault();

    try {
      const respuesta = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nombre,
          departamento,
          descripcion,
          imagen
        })
      });

      if (!respuesta.ok) {
        throw new Error("No se pudo agregar el destino");
      }

      setNombre("");
      setDepartamento("");
      setDescripcion("");
      setImagen("");
      cargarDestinos();

    } catch (error) {
      alert(error.message);
    }
  };

  // Eliminar un destino
  const eliminarDestino = async (id) => {
    if (!window.confirm("¿Deseas eliminar este destino?")) {
      return;
    }

    try {
      const respuesta = await fetch(`${API}/${id}`, {
        method: "DELETE"
      });

      if (!respuesta.ok) {
        throw new Error("No se pudo eliminar");
      }

      cargarDestinos();

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container">
      
      <Navbar />

      <Hero />

      <section className="formulario">
        <h2>Agregar nuevo destino</h2>

        <form onSubmit={agregarDestino}>

          <input
            type="text"
            placeholder="Nombre del destino"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Departamento"
            value={departamento}
            onChange={(e) => setDepartamento(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Imagen"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
            required
          />

          <button type="submit">
            Agregar destino
          </button>

        </form>
      </section>

      <section className="lista">
        <h2>Destinos disponibles</h2>

        {destinos.map((destino) => (
          <article className="destino" key={destino.id}>

            <div>
              <h3>{destino.nombre}</h3>
              <p>{destino.departamento}</p>
              <p>{destino.descripcion}</p>
              <img src={destino.imagen} class="img-thumbnail " alt="imagen" className="img_1"/>
            </div>

            <button
              className="eliminar"
              onClick={() => eliminarDestino(destino.id)}
            >
              Eliminar
            </button>

          </article>
        ))}

      </section>
        <Footer/>
    </div>

  );
}

export default App;
