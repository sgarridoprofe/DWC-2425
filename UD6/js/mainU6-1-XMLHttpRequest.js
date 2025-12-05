function CargarDatos() {
    var xhttp = new XMLHttpRequest();
            
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("contenedorDatos").innerHTML = this.responseText;
        }
        console.log("ReadyState:" + this.readyState,  '-', this.status)
               
    }; 
    xhttp.open("GET", "https://fakestoreapi.com/products", true);
    xhttp.send();
}


function CargarDatosOnLoad() {
    var xhttp = new XMLHttpRequest();
            
    xhttp.onload = function () {
       document.getElementById("contenedorDatos").innerHTML = this.responseText;           
    }; 
    xhttp.open("GET", "https://fakestoreapi.com/products", true);
    xhttp.send();
}



function CargarDatosOnLoadFormateaDatos() {
    var xhttp = new XMLHttpRequest();
            
    xhttp.onload = function () {
        let arDatos=JSON.parse(this.responseText);
        console.log(arDatos)
       document.getElementById("contenedorDatos").innerHTML = arDatos[0].title;         
    }; 
    xhttp.open("GET", "https://fakestoreapi.com/products", true);
    xhttp.send();
}



const mainU6_1=()=>{
    console.log('cargando script main U6_1')
    document.getElementById('cargaDatos').addEventListener('click',CargarDatosOnLoadFormateaDatos)
}

document.addEventListener('DOMContentLoaded', mainU6_1);