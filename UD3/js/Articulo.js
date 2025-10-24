class Articulo {
    constructor(codigo,nombre, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }
    mostrarInfo() {
        return `Artículo: ${this.nombre}, Precio: ${this.precio}€`;
    }

}

export const arDatos=[3,4,5,6];

function prueba() {     
  console.log("Prueba desde Articulo.js");   
}

export { Articulo, prueba };