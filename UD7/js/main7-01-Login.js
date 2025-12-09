import { getAPI, getAPICallback} from './httpCliente.js'

/**
 * Devuelve los personajes de la api futurama
 * @returns 
 */
const devuelvePersonajes=async()=>{
    const API_URL = 'https://futuramaapi.com/api/characters';   
    //const charactersP = await getAPI(API_URL);
    
    const charactersP=await fetch(API_URL);
    console.log('charactersP',charactersP);
    return charactersP.items;
}


const validaUsuario=(data,objUser)=>{
    //valido con name y surname de la api
    const user=data.find((item)=> item.name==objUser.name && item.surname==objUser.password)
    console.log('usuario',user)
    if (user){
        alert(`Bienvenido ${user.name} ${user.surname}`)
        sessionStorage.setItem('usuario',JSON.stringify(user.id))
        window.location.href='ud7-1-Datos.html'
    }
}

const loginAction=()=>{
    const form = document.getElementById('loginForm');
      form.addEventListener('submit',(event)=>{
        event.preventDefault();
        const name = form.name.value.trim();
        const password = form.password.value;

       
        //valido con name y surname de la api
        const url='https://futuramaapi.com/api/users'
        getAPICallback(url,validaUsuario,
                ()=>{console.log('Error.. api..')},
                {name,password})
      });
}


const main=()=>{
    console.log('ejecutando main')
    loginAction()
}

document.addEventListener("DOMContentLoaded",main)