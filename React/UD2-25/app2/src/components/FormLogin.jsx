import React, { useState } from "react";
import useGet from "../hooks/useGet";

export default function FormLogin() {
  const [formulario, setFormulario] = useState({ login: "", pass: "" });
  //const [cargando, setCargando] = useState(true);

  const handleOnChange = (e) => {
    console.log("handleOnChange", e.target.name, e.target.value);
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  let { data, cargando } = useGet("https://fakestoreapi.com/users");

  const loginSubmit = (e) => {
    console.log("loginSubmit", formulario);
    e.preventDefault();

    if (!cargando) {
      console.log("data usuarios:", data);
      data.filter((usuario) => {
        if (
          usuario.username === formulario.login &&
          usuario.password === formulario.pass
        ) {
          console.log("Usuario logueado:", usuario);
        } else {
          console.log("Usuario no encontrado");
        }
      });
    }
  };

  return (
    <div>
      <div>FormLogin</div>
      <form onSubmit={loginSubmit}>
        <label>
          Usuario:
          <input
            type="text"
            name="login"
            value={formulario.login}
            onChange={handleOnChange}
          />
        </label>
        <br />

        <label>
          Contraseña:
          <input
            type="password"
            name="pass"
            value={formulario.pass}
            onChange={handleOnChange}
          />
        </label>
        <br />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}
