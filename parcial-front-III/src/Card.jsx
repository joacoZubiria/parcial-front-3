//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({persona}) {
  return (
    <div>
      <h2>Nombre: {persona.nombre}</h2>
      <br/>
      <h2>Apellido: {persona.apellido}</h2>
    </div>
  );
}

export default Card;
