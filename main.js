const emojis = ["😊","😁","😎","🤗","🙂","🤓","😜","😂","😄","😊","😁","😃","😎","🤗","🙂","🤓","😜","😂","😄","😃"];

let elementosEmoji = documet.querySelectorAll(".emoji");

for(let contador = 0; contador < elementosEmoji.length; contador++){
    elementosEmoji[contador].textContent(emojis[contador]);
}