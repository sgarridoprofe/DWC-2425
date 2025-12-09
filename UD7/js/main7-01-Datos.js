import { getAPI, getAPICallback} from './httpCliente.js'

// await: async/await
// await una función espera a que se resuelva una promesa
// async: una función que devuelve una promesa



/**
 * Devuelve los personajes de la api futurama
 * @returns 
 */
const devuelvePersonajes=async ()=>{
    const API_URL = 'https://futuramaapi.com/api/characters';   
    //const charactersP = await getAPI(API_URL);
    
    /*const charactersP=await fetch(API_URL).then((result) => result.json())  ;
    console.log('charactersP',charactersP);
    generaCardsPersonajes(charactersP.items);*/

    const {items}=await fetch(API_URL).then((result) => result.json())  ;
    console.log('items',items);
    generaCardsPersonajes(items);

    return items;
}

const carritoAdd=(item)=>{
    console.log('añadir al carrito',item);
    let carrito=JSON.parse(sessionStorage.getItem('carrito')) || [];
    carrito.push(item);
    sessionStorage.setItem('carrito',JSON.stringify(carrito));
    console.log('carrito',carrito);
}

const carritoShow=()=>{
    const carrito=JSON.parse(sessionStorage.getItem('carrito')) || [];
    
    console.log('ver carrito',carrito);
    const divCarrito=document.getElementById('Carrido');
    divCarrito.innerHTML='';  
    console.log('carrido',carrito);
  
    if (carrito.length===0){
       
        return;
    }

    const h2=document.createElement('H2');
    h2.textContent=`Carrito (${carrito.length} items)`;
    divCarrito.appendChild(h2);

    carrito.forEach((item)=>{
        const p=document.createElement('p');
        p.textContent=`${item.name} - ${item.species}`;
        divCarrito.appendChild(p);
    });


}

const generaCardsPersonajes=(data)=>{
    const grid=document.getElementById('gridPersonajes');   
    data.forEach((item)=>{
        console.log('item',item);
        const card=document.createElement('div');
        card.className='card';

        const img=document.createElement('img');
        img.src=item.image;
        img.width=200;
        img.height=200;
        img.alt=`Imagen de ${item.name}`;
        card.appendChild(img);

        const name=document.createElement('h2');
        name.textContent=`${item.name} ${item.species}`;
        card.appendChild(name);
        grid.appendChild(card);

        card.addEventListener('click',()=>{
            alert(`Has seleccionado a ${item.name}`);  
                       
            sessionStorage.setItem('personaje',JSON.stringify(item.id))

            carritoAdd(item);
            carritoShow();
        });
    })
}


const compruebaUsuario=()=>{
    const usuario=sessionStorage.getItem('usuario');
    if (!usuario){
        window.location.href='ud7-1-Login.html'
    }
}
const main=()=>{

    compruebaUsuario();
    carritoShow();
    //opción 1 await y genero las cards dentro de devuelvePersonajes
    console.log('ejecutando main')
    
    //opción 1 await y genero las cards dentro de devuelvePersonajes    
    const Personajes=devuelvePersonajes();
    console.log('Personajes',Personajes);
    
    //opción 2 await y uso la promesa de async para crear los cards aquí
    /*devuelvePersonajes().then((data)=>{
        console.log('Personajes 2',data);
        generaCardsPersonajes(data);
    });*/
}



document.addEventListener("DOMContentLoaded",main)