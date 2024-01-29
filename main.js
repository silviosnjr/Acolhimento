const emojis = ["😊","😁","😎","🤗","🙂","🤓","😜","😂","😄","😊","😁","😃","😎","🤗","🙂","🤓","😜","😂","😄","😃"];

let elementosEmoji = document.querySelectorAll(".emoji");

for(let contador = 0; contador < elementosEmoji.length; contador++){
    elementosEmoji[contador].html = "<span>"+(contador+1)+"</span><p class='emoji'></p>"+emojis[contador]+"</>";
}