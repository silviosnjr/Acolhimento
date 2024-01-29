const emojis = ["😊","😁","😎","🤗","🙂","🤓","😜","😂","😄","😊","😁","😃","😎","🤗","🙂","🤓","😜","😂","😄","😃"];

let ElmentosPersonalize = document.querySelectorAll(".emoji");

for(let contador = 0; contador < ElmentosPersonalize.length; contador++){
    ElmentosPersonalize[contador].insertAdjacentHTML('beforebegin', "<span>"+(contador+1)+"</span><p class='emoji'></p>"+emojis[contador]+"</>");
}