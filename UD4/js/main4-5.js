

const muestraDatosFormulario=() => {
    const formulario=document.forms[0];
    let name=document.getElementById('nombre').value;

    console.log('Nombre:, ', name);

   /* console.log('Datos del formulario:');
    for (let i = 0; i < formulario.elements.length; i++) {
        const elemento = formulario.elements[i];
        console.log(`Elemento ${i}: nombre=${elemento.name}, valor=${elemento.value}`);
    }
*/
}


const main=() => {
    console.log('This is main4-5.js');
    document.getElementById('btnEnviar').addEventListener('click', (event) => {
        event.preventDefault();
        muestraDatosFormulario();
    });
}

document.addEventListener("DOMContentLoaded", main);