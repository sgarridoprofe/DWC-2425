
const devuelveCookie=(nombre)=>{
    let name = nombre + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookies = decodedCookie.split(';');  

    
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        let subCadena=cookie.toUpperCase().substring(0,name.length)
        if (subCadena.localeCompare(name.toUpperCase())==0) {
            let valor=cookie.substring(name.length, cookie.length);
            console.log('¡Coincidencia encontrada! Valor: ' + valor);
            return valor;
        }
    }
       
    return "";

}

const mostrarCookies=()=>{
    console.log('All cookies: ' + document.cookie);     
    alert('All cookies: ' + document.cookie);

    let valorTema=devuelveCookie('tema');
    console.log('Valor de la cookie tema: ' + valorTema);
}


 const fCrearCookie = (nombre, valor, diasExpiracion) => {
     let d = new Date();
     d.setTime(d.getTime() + (diasExpiracion*24*60*60*1000));
     let expiracion = "expires="+ d.toUTCString();
     document.cookie = nombre + "=" + valor + ";" + expiracion + ";path=/";
 }




const CreaCookie=()=>{
    document.cookie = "usuario=Juan";
    document.cookie = "tema=oscuro";
    fCrearCookie('apellido','Pérez',7);
    
}





const main5_Cookies = () => {
    console.log('This is main5-Cookies.js');

    document.getElementById('btnCrearCookie').addEventListener('click', CreaCookie);
    document.getElementById('btnMostrarCookie').addEventListener('click', mostrarCookies); 
    

    // Set a cookie
    // document.cookie = "username=JohnDoe; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";
    // console.log('Cookie set: ' + document.cookie);


    // Get all cookies
    console.log('All cookies: ' + document.cookie);
    // Parse cookies
    const cookies = document.cookie.split('; ');
    cookies.forEach(cookie => {
        const [name, value] = cookie.split('=');
        console.log(`Cookie Name: ${name}, Cookie Value: ${value}`);
    });
    // Delete a cookie
    // document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    // console.log('Cookie deleted. Current cookies: ' + document.cookie);  
}



document.addEventListener('DOMContentLoaded', function(){
    main5_Cookies();        
});





