import { conselhos } from "./conselhos.js";


function gerarConselhoAleatorio() {
  // Selecionar um array aleatório dos conselhos
  const arrayAleatorio =
    conselhos[Math.floor(Math.random() * conselhos.length)];

  // Selecionar um conselho aleatório do array selecionado
  const conselhoAleatorio =
    arrayAleatorio[Math.floor(Math.random() * arrayAleatorio.length)];

  return conselhoAleatorio;
}

// Exemplo de uso

export default gerarConselhoAleatorio