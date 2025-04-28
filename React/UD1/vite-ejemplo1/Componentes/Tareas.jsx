import { useState } from "react";

function Tareas() {
  const [arrTareas, setArrTareas] = useState([]);
  //   const arrTareas = ["Debers", "Cocina"];
  let tarea = "";

  function handleOnChange(e) {
    tarea = e.target.value;
  }

  function handleClick() {
    // arrTareas.push(tarea);
    // setArrTareas(arrTareas); // no funciona, es la misma referencia
    setArrTareas([...arrTareas, tarea]);

    console.log(arrTareas);
    // console.log(arrTareas);
  }

  return (
    <>
      {console.log("Array", arrTareas)}
      Tarea
      <input
        type="text"
        name="Importe"
        onChange={(e) => handleOnChange(e)}
      ></input>
      <button onClick={handleClick}>Add Tarea</button>
      {arrTareas.length > 0 && <button>quitar tarea</button>}
      <ul>
        {arrTareas.map((tarea, index) => (
          <li key={index}>{tarea}</li>
        ))}
      </ul>
    </>
  );
}

export default Tareas;
