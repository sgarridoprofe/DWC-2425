
/*const recorreNodo=(nodo)=>{
    console.log('Recorriendo nodo:', nodo);
    
    nodo.childNodes.forEach((child)=>{
        console.log(child);
    });
    

    // nodo.firstChild && recorreNodo(nodo.firstChild);
    // nodo.nextSibling && recorreNodo(nodo.nextSibling);
}*/


const informacionNodo=(nodo)=>{
    //Información de un nodo
    console.log('Información del Nodo:', nodo);
    console.log('Tipo de nodo:', nodo.nodeType); // 1: Element, 3: Text, 8: Comment
    console.log('Nombre del nodo:', nodo.nodeName);
    console.log('Valor del nodo:', nodo.nodeValue);
    console.log('Número de hijos:', nodo.childNodes.length);
    console.log('Contenido del nodo:', nodo.textContent);

    //obtenemos todos los tipos de nodos
    console.log('Primer hijo:', nodo.firstChild);
    console.log('Último hijo:', nodo.lastChild);
    console.log('Nodo padre:', nodo.parentNode);
    console.log('Nodo siguiente:', nodo.nextSibling);
    console.log('Nodo anterior:', nodo.previousSibling);

    //Métodos para obtener sólo los nodos de tipo Element 
    console.log('Primer hijo (elemento):', nodo.firstElementChild);
    console.log('Último hijo (elemento)', nodo.lastElementChild);
    console.log('Nodo siguiente (Elemento):', nodo.nextElementSibling);
    console.log('Nodo anterior: (Elemento)', nodo.previousElementSibling);
}

/**
 * Muestra el nodo y todos sus hijos
 * @param {*} nodo 
 */
const recorreNodo=(nodo)=>{
    console.log('Recorriendo nodo:', nodo);
    // nodo.childNodes.forEach((child)=>{
    //     console.log(child);
    // });

    for(let hijo of nodo.children)
        console.log(hijo)
}


/**
 * Recorre un nodo, junto con todo su subarbol
 * @param {*} nodo 
 */
const recorreNodoRecursivo=(nodo)=>{
    console.log(nodo)
    for(let hijo of nodo.children)
        recorreNodoRecursivo(hijo)
   
}

const main5_8=()=>{
    console.log('Ejecutando main5-8.js');
    //informacionNodo(document.getElementById('lista'));
    recorreNodoRecursivo(document.getElementById('lista'));
}

document.addEventListener('DOMContentLoaded', main5_8);
