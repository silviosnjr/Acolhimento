const emojis = ["😊","😁","😎","🤗","🙂","🤓","😜","😂","😄","😊","😁","😃","😎","🤗","🙂","🤓","😜","😂","😄","😃"];
const colors = ["lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategrey","lightsteelblue","lightyellow","lightblue","lightgrey","lightsalmon","lightgoldenrodyellow","lightsteelblue","lightpink","lightskyblue"]

let ElmentosPersonalize = document.querySelectorAll(".personalize");

for(let contador = 0; contador < ElmentosPersonalize.length; contador++){    
    ElmentosPersonalize[contador].computedStyleMap.backgroundColor = colors[contador];
    const elementoP = document.createElement('p');   
    elementoP.className = 'emoji';
    elementoP.innerText = emojis[contador];
    ElmentosPersonalize[contador].insertBefore(elementoP, ElmentosPersonalize[contador].firstChild);    
    const elementoSpan = document.createElement('span');
    elementoSpan.innerText = contador+1;
    ElmentosPersonalize[contador].insertBefore(elementoSpan, ElmentosPersonalize[contador].firstChild);
}