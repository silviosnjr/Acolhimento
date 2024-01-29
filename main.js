const emojis = ["😊","😁","😎","🤗","🙂","🤓","😜","😂","😄","😊","😁","😃","😎","🤗","🙂","🤓","😜","😂","😄","😃"];

let ElmentosPersonalize = document.querySelectorAll(".personalize");

for(let contador = 0; contador < ElmentosPersonalize.length; contador++){    
    const elementoP = document.createElement('p');   
    elementoP.className = 'emoji';
    elementoP.innerText = emojis[contador];
    ElmentosPersonalize[contador].insertBefore(elementoP, ElmentosPersonalize[contador].firstChild);    
    const elementoSpan = document.createElement('span');
    elementoSpan.innerText = contador+1;
    ElmentosPersonalize[contador].insertBefore(elementoSpan, ElmentosPersonalize[contador].firstChild);
}