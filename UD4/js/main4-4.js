

const aplicandoExpresionesRegulares = () => {
    /*const texto = 'Los números de teléfono son 123-456-7890 y 987-654-3210.';
    const regexTelefono = /\d{3}-\d{3}-\d{4}/g;
    const telefonosEncontrados = texto.match(regexTelefono);
    console.log('Números de teléfono encontrados:', telefonosEncontrados);
*/


}


const usoExec = () => {
    const regex = /\d{5}/g;
    const str = "cp 18800 cp 29300 cp 50000";
    let array;

while ((array = regex.exec(str)) !== null) {
    debugger;
  console.log(`Found ${array[0]}. Next starts at ${regex.lastIndex}. valor del array: ${array}`);
  // Expected output: "Found foo. Next starts at 9."
  // Expected output: "Found foo. Next starts at 19."
}
}




const expresionRegular=()=>{
    const texto = '43T434'

    const regexNumero = /^\d+$/;
    const regexNumeroDecimal = /^\d+(\.\d+)?$/;

    const regexNumeroObj=new RegExp('^\d+$');

    if (regexNumero.test(texto)) {
        console.log(`${texto} es un número válido.`);
    } else {
        console.log(`${texto} no es un número válido.`);
    }

    

     if (regexNumeroObj.test(texto)) {
        console.log(`${texto} es un número válido.`);
    } else {
        console.log(`${texto} no es un número válido.`);
    }
}



const main = () => {      
    console.log('This is main4-4.js');
    expresionRegular();
    usoExec();
    //const div=document.querySelector('div');
    //console.log('Div DOMContentLoaded:', div);  
}

document.addEventListener('DOMContentLoaded', main);