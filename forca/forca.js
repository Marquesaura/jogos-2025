const teclado = [
    "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
    "a", "s", "d", "f", "g", "h", "j", "k", "l", "ç",
    "z", "x", "c", "v", "b", "n", "m"
];
const palavrasFaceis = [
    { palavra: "casa", dica: "Lugar" },
    { palavra: "bola", dica: "brinquedo" },
    { palavra: "gato", dica: "Animal doméstico" },
    { palavra: "amor", dica: "Sentimento" },
    { palavra: "Sol", dica: "Astro" },
    { palavra: "Paz", dica: "Sensação" },
    { palavra: "Rio", dica: "água" },
    { palavra: "livro", dica: "Objeto" },
    { palavra: "foco", dica: "Estado mental" },
    { palavra: "mesa", dica: "móvel" },
    { palavra: "pão", dica: "alimento" },
    { palavra: "azul", dica: "cor" },
    { palavra: "luz", dica: "ajuda a enxergar" },
    { palavra: "flor", dica: "planta" },
    { palavra: "tempo", dica: "Afeta o clima e os relógios" },

]
const palavrasMedias = [
    { palavra: "abacaxi", dica: "Fruta tropical com coroa" },
    { palavra: "computador", dica: "Usado para navegar na internet" },
    { palavra: "cachorro", dica: "Amigo peludo e leal" },
    { palavra: "bicicleta", dica: "Meio de transporte com duas rodas" },
    { palavra: "elefante", dica: "Animal com tromba enorme" },
    { palavra: "montanha", dica: "Muito alta e cheia de trilhas" },
    { palavra: "girassol", dica: "Segue a luz do sol" },
    { palavra: "oceano", dica: "Grande corpo de água salgada" },
    { palavra: "caderno", dica: "Onde você anota as ideias" },
    { palavra: "telefone", dica: "Usado para ligar ou mandar mensagens" },
    { palavra: "janela", dica: "Abre para ver lá fora" },
    { palavra: "espaguete", dica: "Massa comprida e italiana" },
    { palavra: "dinossauro", dica: "Animal pré-histórico gigante" },
    { palavra: "pirulito", dica: "Doce preso em um palito" },
    { palavra: "tartaruga", dica: "Devagar e com casco duro" },
    { palavra: "caneca", dica: "Usada para tomar café ou chá" },
    { palavra: "planeta", dica: "Habitat flutuante no espaço" },
    { palavra: "borboleta", dica: "Nasce de uma lagarta" },
    { palavra: "escorregador", dica: "Brinquedo de parque que desce" },
    { palavra: "violino", dica: "Instrumento de cordas tocado com arco" }
];
const palavrasDificeis = [
    "quimera", "exílio", "subterfúgio", "efêmero", "solilóquio",
    "obnóxio", "idiossincrasia", "moribundo", "pleonasmo",
    "resiliência", "anacrônico", "circunspecto", "perjúrio",
    "retumbante", "inócuo"
];

function selDificuldade(dificuldade) {
    let dificuldade = prompt("Escolha a dificuldade:")
    switch (dificuldade) {
        case "facil":
            return palavrasFaceis;
        case "media":
            return palavrasMedias;
        case "dificil":
            return palavrasDificeis.map(p => ({ palavra: p, dica: "(sem dica)" }));

        default:
            window.alert("Dificuldade inválida.");
            listaSelecionada = [];
    }


}

function sortearPalavra() {
    const dificuldade = document.getElementById("dificuldade").value;
    const lista = selDificuldade(dificuldade);
    const sorteada = lista[Math.floor(Math.random() * lista.length)];
    document.getElementById("resultado").innerText = `Palavra: ${sorteada.palavra} | Dica: ${sorteada.dica}`;
}


let letras = [];

const erros = 0;

if (!palavras.includes(letras)) {
    erros++;
}
document.getElementsByClassName("img-forca").src = `imagens/forca${erros}.png`;

if (erros != 0) {
    document.getElementsByClassName("img-forca").src = `imagens/forca${erros}.png`;
    console.log(erros)
}