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
const iniciarJogo = () => {
    vezDoO = false;

    for (const q of quadrados) {
        q.classList.remove("o");
        q.classList.remove("x");
        q.removeEventListener("click", handleClick);
        q.addEventListener("click", handleClick, { once: true });
    }
    
    setTudoAquiHoverClass();
    vencedor.classList.remove("mostrar");
}

const acabarJogo = (empate) => {
    if (empate) {
      msgvitoria.innerText = "Empate!";
    } else {
      msgvitoria.innerText = vezDoO
        ? "O Venceu!"
        : "X Venceu!";
    }
    vencedor.classList.add("mostrar");
};

const ganhou = (jogadorDaVez) => {
    return combinacoes.some((combination) => {
      return combination.every((index) => {
        return quadrados[index].classList.contains(jogadorDaVez);
      });
    });
};
  
const empatou = () => {
    return [...quadrados].every((q) => {
      return q.classList.contains("x") || q.classList.contains("o");
    });
};

const colocarMarca = (q, classToAdd) => {
    q.classList.add(classToAdd);
};
  
const setTudoAquiHoverClass = () => {
    tudoaqui.classList.remove("o");
    tudoaqui.classList.remove("x");
  
    if (vezDoO) {
      tudoaqui.classList.add("o");
    } else {
      tudoaqui.classList.add("x");
    }
};
  
const mudarJogador = () => {
    vezDoO = !vezDoO;
  
    setTudoAquiHoverClass();
};