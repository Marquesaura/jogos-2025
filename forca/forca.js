const teclado = [
    "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
    "a", "s", "d", "f", "g", "h", "j", "k", "l", "ç",
    "z", "x", "c", "v", "b", "n", "m"
];
const palavras = [
    "abacaxi", "computador", "cachorro", "bicicleta", "elefante",
    "montanha", "girassol", "oceano", "caderno", "telefone",
    "janela", "espaguete", "dinossauro", "pirulito", "tartaruga",
    "caneca", "planeta", "borboleta", "escorregador", "violino"
  ];
let letras = [];

const erros = 0; // exemplo

if (!palavras.includes(letras)){
    erros ++;
}
document.getElementsByClassName("img-forca").src = `imagens/forca${erros}.png`;


function jogar() {

}