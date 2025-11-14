

const main = () => {      
    console.log('This is main4-3.js');
    const div=document.querySelector('div');
    console.log('Div DOMContentLoaded:', div);

     document.body.addEventListener('click', (event) => {
         console.log(`Evento: ${event.type} en ${event.target.tagName} (DOMContentLoaded) this:${this.tagName}`);
     })
    
    document.getElementById('principal').onclick = function (event) {
        console.log(`Evento: ${event.type} en ${event.target.tagName} (click property) this:${this.tagName}`);          
    }
}


document.addEventListener('DOMContentLoaded', main);

const div=document.querySelector('div');
console.log('Div:', div);