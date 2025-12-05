import { get } from './httpCliente.js'


 async function getFetch() {
    let response=await fetch('https://fakestoreapi.com/products')
    console.log('response',response)
    //console.log('response.json()',response.json())
    console.log('response.json() await',await response.json())
}



const muestraProductos = (arDatos)=>{

     arDatos.forEach((producto) => {
        document.getElementById("contenedor").innerHTML += "<p>" + producto.title + "</p>"
     })
    
}

function getFetchV2(){
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(datos => muestraProductos(datos))
        .catch( error => console.log('error',error))

        
}

function getFetchV3(url){
     console.log(url)
     get(url).then(datos => muestraProductos(datos))
}



const mainU6_Promesas=()=>{
     console.log('main u6')
     getFetchV3('https://fakestoreapi.com/products');
}

document.addEventListener('DOMContentLoaded', mainU6_Promesas);