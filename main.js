const emojis = ["😊","😁","😎","🤗","🙂","🤓","😜","😂","😄","😊","😁","😃","😎","🤗","🙂","🤓","😜","😂","😄","😃"];

let ElmentosPersonalize = document.querySelectorAll(".personalize");

for(let contador = 0; contador < ElmentosPersonalize.length; contador++){
    ElmentosPersonalize[contador].innerText = "<span>"+(contador+1)+"</span><p class='emoji'></p>"+emojis[contador]+"</>";
}