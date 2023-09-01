const quadrados = document.querySelectorAll("[data-q]");
const tudoaqui = document.querySelector("[data-tudoaqui]");
const msgvitoria = document.querySelector("[data-vencedor-text]");
const vencedor = document.querySelector("[data-vencedor]");
const botao = document.querySelector("[data-vencedor-button]");

let vezDoO;

const combinacoes = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
