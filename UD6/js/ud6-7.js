import { getAPI, getAPICallback, postAPI } from "../utils/httpCliente.js";

/**
 *
 * @param {Array} datos procedentes de la petición get
 */
const procesadatos = (datos) => {
  const $framento = document.createElement("fragment");

  document.getElementById("contenedor").innerHTML = "";

  datos.forEach((element) => {
    let $p = document.createElement("p");
    $p.textContent = " " + element.title + " " + element.price;
    $framento.appendChild($p);
    console.log(element);
  });
  document.getElementById("contenedor").appendChild($framento);
};

const procesandoerror=(error) => {
  document.getElementById("contenedor").innerHTML = "Error en petición..";
  console.error('Error en petición...' + error)
}

const eventoInsertar = () => {
  document.getElementById("btnInsertarDatos").addEventListener("click", () => {
    alert("ejecutando inserccion");
    let producto = {
      title: "test product",
      price: 13.5,
      description: "lorem ipsum set",
      image: "https://i.pravatar.cc",
      category: "electronic",
    };
    postAPI("https://fakestoreapi.com/products", producto).then((datos) =>
      console.log(datos)
    );
  });
};

const eventoLeer = () => {
  document.getElementById("btnCargarDatos").addEventListener("click", () => {
    alert("Llamando a getAPI.https://fakestoreapi.com/products..");
    
     getAPI("https://fakestoreapi.com/products").then((datos) => {
       console.log(datos)
       procesadatos(datos)
     })
  });
};

const eventoLeerCallback = () => {
  document.getElementById("btnCargarDatos").addEventListener("click", () => {
    alert("ejecutando...");
    getAPICallback("https://fakestoreapi.com/products", procesadatos, procesandoerror);
  });
};

const main = () => {
  //eventoLeer();
  eventoLeerCallback();
  eventoInsertar();
};

document.addEventListener("DOMContentLoaded", main);
