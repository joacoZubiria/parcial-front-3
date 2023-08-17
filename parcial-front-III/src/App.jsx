import { useState } from "react";
import Card from "./Card";

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
  const [persona, setPersona] = useState({nombre:'', apellido:''});
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const submitHandler = (e) =>{
    e.preventDefault();
    setError(false);
    setShow(false);
    if((persona.nombre.length >= 3 && !/^\s/.test(persona.nombre)) && (persona.apellido.length >= 6)){
      setShow(true);
    }else setError(true);
  }
  const handleNameChange = (e) => {
    setError(false);
    setShow(false);
    setPersona({...persona, nombre: e.target.value});
  }
  const handleApellidoChange = (e) =>{
    setError(false);
    setShow(false);
    setPersona({...persona, apellido: e.target.value});
  }
  return (
    <div className="App">
      <h1>Nombre y Apellido</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" name="nombre" onChange={handleNameChange} />
        <label htmlFor="apellido">Apellido</label>
        <input type="text" name="apellido" onChange={handleApellidoChange} />
        <button type="submit" >Enviar</button>
        {error && <h1>Por favor chequea que la información sea correcta</h1>}
        {show ? <Card persona={persona}/> : null}
      </form>
    </div>
  );
}

export default App;
