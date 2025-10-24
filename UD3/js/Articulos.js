import {Articulo} from './Articulo.js';

export class Articulos {
    constructor(arAticulos) {
        //array que contiene objetos Articulo
        this.listaArticulos = arAticulos;
    }

    inicializaDatos() {
        const arArticulos = [];
        console.log("Inicializando datos...");
        for (let i = 0; i < 3; i++) {
            arArticulos.push(new Articulo(i + 1, `Artículo ${i + 1}`, (i + 1) * 10));
        }
        return arArticulos    
    }

    /**
     * True si existe el artículo con el código indicado, false en caso contrario
     * @param {*} codigo del artículo
     * @returns 
     */
    existeArticulo(codigo){
        
       if (this.listaArticulos.find(art => art.codigo === codigo)===undefined)
              return false;
       return true
        
    }

    /**
     * devuelve un array con los articulos superiores a preciominimo

     * @param {*} precioMinimo valor del precio mínimo
     */
    filtrarPorPrecio(precioMinimo){
        return this.listaArticulos.filter( ({precio}) => precio > precioMinimo)
    }

    /**
     * Filtra los artículos según la función de callback proporcionada
     * @param {*} callback funcion de filtro
     */
    filtra(callback){
        return this.listaArticulos.filter(callback)
    }

    addArticulo(articulo){
        this.listaArticulos.push(articulo);
    }

    removeArticulo(codigo){
}