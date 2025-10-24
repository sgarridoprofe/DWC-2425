import { Articulo } from "./Articulo.js";
import { Articulos } from './Articulos.js';

let dbDatosArticulos=[]
 let dbArt;

let fInit=() => {
    let art1=new Articulo(1,"Camiseta",19.99);
    let art2=new Articulo(2,"Pantalón",39.99);
    let art3=new Articulo(3,"Zapatos",59.99);
    dbArt=new Articulos([art1,art2,art3,new Articulo(4,"Chaqueta",89.99)]);
   

    dbDatosArticulos.push(art1,art2,art3);
    console.log("Datos de artículos inicializados");
}

(function (){
    console.log("main10.js loaded");
    fInit()
    console.log("dbArticulos:",dbDatosArticulos)
    //filtrar los articulos

    let valoresFiltrados=[4,5,6].filter(i=>i>5)
    console.log("valoresFiltrados:",valoresFiltrados)

    valoresFiltrados=dbDatosArticulos.filter( ({precio}) => precio > 30)
    console.log("Artículos con precio > 30€:",valoresFiltrados)

    dbArt.existeArticulo(2)?console.log("El artículo con código 2 existe"):console.log("El artículo con código 2 no existe");
    console.log(" dbArt.filtrarPorPrecio(20)", dbArt.filtrarPorPrecio(20))
    console.log("dbArt.filtra(({codigo})=>codigo<3)",dbArt.filtra(({codigo})=>codigo<3))
})()