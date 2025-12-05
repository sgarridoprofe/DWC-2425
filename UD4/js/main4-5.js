

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


function validaFormulario(event) {
    event.preventDefault();
    const formulario=document.forms[0];
    let name=document.getElementById('nombre').value;
    if (name.trim() === '') {
        alert('El campo nombre es obligatorio.');
        return false;
    }
    return true;
}


function validaFormulario2(event) {
    event.preventDefault();
    
    let name=document.getElementById('nombre').value; 
    if (name.trim() === '') {
        alert('El campo nombre es obligatorio.');
        return false;
    } 

    if (!validaUsuario()) {
        alert('Usuario o password incorrectos.');
        return false;
    }
}


function validaUsuario() {
    const frmLogin=document.getElementById('formLogin');
    
    //frmLogin.elements['nombre']
    //frmLogin.elements['password']
    //frmlogin.elements devuelve un htmlCollection
    const { nombre, password } = frmLogin.elements;

    if (nombre.value === 'sergio' && password.value === 's') {
       return true;
    }
    return false;
}

const main=() => {
    console.log('This is main4-5.js');
    
    // document.getElementById('btnEnviar').addEventListener('click', (event) => {
    //     event.preventDefault();
    //     muestraDatosFormulario();
    // });

    // let btnEnviar=document.getElementById('btnEnviar');
    // btnEnviar.addEventListener('click',validaFormulario);
    
    document.forms[0].addEventListener('submit',validaFormulario2);
}

document.addEventListener("DOMContentLoaded", main);