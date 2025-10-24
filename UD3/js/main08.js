
import { arDatos as arDatosNumeros, Articulo,prueba } from "./Articulo.js";
import Cliente, { saludo } from "./Cliente.js";
import { Articulos } from './Articulos.js';




(function (){
    console.log("Hello from main08.js");
    let art1=new Articulo(1,"Camiseta",19.99);
    console.log(art1.mostrarInfo());
    prueba()
    console.log("array dagos",arDatosNumeros)
    let cli1=new Cliente(101,"Juan Pérez");
    console.log(cli1.mostrarInfo());
    saludo(); 
    
    
    console.log("Artículos inicializados:");
    articulos.forEach(art => console.log(art.mostrarInfo()));
    const articulos=new Articulos();

    articulos.inicializaDatos();
})();