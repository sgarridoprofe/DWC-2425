import db  from '../json/db.json' with {type: 'json'};

const createDivs = (nodePadre,num) => {
    for (let i = 0; i < num; i++) {
        const div = document.createElement('div');      
        div.textContent = `Div  ${i + 1}`;
        div.id = `div${i + 1}`;
        //document.body.appendChild(div);
        nodePadre.appendChild(div);
    }
}



const main5_2B = () => {
    console.log('This is main5-2B.js');
    createDivs(document.getElementById('contenedor'),3);
}


document.addEventListener('DOMContentLoaded', main5_2B);