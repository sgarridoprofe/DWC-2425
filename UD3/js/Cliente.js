export default class Cliente {
    constructor(id,nombre) {
        this.id = id;
        this.nombre = nombre;
    }
    mostrarInfo() {
        return `Cliente: ${this.nombre}, ID: ${this.id}`;
    }   
}

export function saludo() {
    console.log("¡Hola desde Cliente.js!");
}