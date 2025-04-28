import { useState } from "react";
import { useNavigate } from "react-router";
// formulario no controlado, simplemente reaccionamos a un evento
/*
function Formularios() {
  const [buscar, setBuscar] = useState("");
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setBuscar(e.target.buscar.value);

        }}
      >
        <input type="text" name="buscar" autoComplete="false"></input>
        <button type="submit"></button>
        <p> Buscando en ....{buscar}</p>
      </form>
    </>
  );
}
*/
/*Formulario controlado paso 1*/
/*
function Formularios() {
  const [buscar, setBuscar] = useState("");

  if (buscar == "hola") setBuscar("adios"); //puedo controlar el contenido

  return (
    <>
      <form>
        <input
          type="text"
          name="buscar"
          autoComplete="false"
          value={buscar}
          onChange={(ev) => {
            setBuscar(ev.target.value);
          }}
        ></input>
        <button type="submit"></button>
        <p> Buscando en ....{buscar}</p>
      </form>
    </>
  );
}
*/
/* Formularios controlados 2
 */
function Formularios() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  let errorMsg = validaFormulario(login, password);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // if (logeaUsuario(login, password)) navigate("/");
          logeaUsuario(login, password) && navigate("/");
        }}
      >
        <input
          type="text"
          name="login"
          autoComplete="false"
          value={login}
          onChange={(ev) => {
            setLogin(ev.target.value);
          }}
        ></input>
        <input
          type="password"
          name="password"
          autoComplete="false"
          value={password}
          onChange={(ev) => {
            setPassword(ev.target.value);
          }}
        ></input>
        <p color="red">{errorMsg}</p>
        <button type="submit">Iniciar</button>
      </form>
    </>
  );
}

const validaFormulario = (login, password) => {
  if (login == password && login != "")
    return "El login no puede ser igual al password";
};

const logeaUsuario = (login, password) => {
  if (login == "jander" && password == "clander") return true;
  return false;
};

export default Formularios;
