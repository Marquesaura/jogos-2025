const teclado = [
    "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
    "a", "s", "d", "f", "g", "h", "j", "k", "l", "ç",
    "z", "x", "c", "v", "b", "n", "m"
  ];
  const tecladoCaixa = document.getElementById("container-alafabeto");
  const contentClue = document.querySelector(".dica");
  const contentGuessWord = document.querySelector(".adivinhar");
  const resultado = document.getElementById("resultado");
  const imagemForca = document.querySelector(".img-forca");

  const palavrasFaceis = [
    { palavra: "casa", dica: "Lugar" },
    { palavra: "bola", dica: "Brinquedo" },
    { palavra: "gato", dica: "Animal doméstico" },
    { palavra: "amor", dica: "Sentimento" },
    { palavra: "sol", dica: "Astro" },
    { palavra: "paz", dica: "Sensação" },
    { palavra: "rio", dica: "Água" },
    { palavra: "livro", dica: "Objeto" },
    { palavra: "foco", dica: "Estado mental" },
    { palavra: "mesa", dica: "Móvel" }
  ];
  const palavrasMedias = [
    { palavra: "abacaxi", dica: "Fruta tropical" },
    { palavra: "computador", dica: "Usado para navegar na internet" },
    { palavra: "girassol", dica: "Flor" },
    { palavra: "oceano", dica: "Corpo de água" },
    { palavra: "telefone", dica: "Eletrônico" }
  ];
  const palavrasDificeis = [
    "quimera", "subterfúgio", "efêmero", "solilóquio", "idiossincrasia"
  ];

  teclado.forEach(letra => {
    const p = document.createElement("p");
    p.textContent = letra;
    p.addEventListener("click", () => verificarLetra(letra));
    tecladoCaixa.appendChild(p);
  });

  let palavraAtual = "";
  let dicaAtual = "";
  let erros = 0;

  function selDificuldade(dificuldade) {
    switch (dificuldade) {
      case "facil":
        return palavrasFaceis;
      case "media":
        return palavrasMedias;
      case "dificil":
        return palavrasDificeis.map(p => ({ palavra: p, dica: "(sem dica)" }));
      default:
        alert("Dificuldade inválida");
        return [];
    }
  }

  function sortearPalavra() {
    const dificuldade = document.getElementById("dificuldade").value;
    const lista = selDificuldade(dificuldade);
    const sorteada = lista[Math.floor(Math.random() * lista.length)];
    return sorteada;
  }

  function adivinharPalavras() {
    contentGuessWord.innerHTML = "";
    erros = 0;
    imagemForca.src = `imagens/forca${erros}.png`;

    const sorteada = sortearPalavra();
    palavraAtual = sorteada.palavra.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    dicaAtual = sorteada.dica;

    resultado.textContent = `Palavra: ${sorteada.palavra} | Dica: ${sorteada.dica}`;
    contentClue.textContent = `Dica: ${dicaAtual}`;

    Array.from(palavraAtual).forEach(letra => {
      const span = document.createElement("span");
      span.textContent = "_";
      span.setAttribute("data-letra", letra);
      contentGuessWord.appendChild(span);
    });
  }

  function verificarLetra(letra) {
    const spans = document.querySelectorAll(".adivinhar span");
    let acerto = false;

    spans.forEach(span => {
      if (span.getAttribute("data-letra") === letra) {
        span.textContent = letra.toUpperCase();
        acerto = true;
      }
    });

    if (!acerto) {
      erros++;
      if (erros <= 6) {
        imagemForca.src = `imagens/forca${erros}.png`;
      } else {
        alert("Você perdeu! Tente novamente.");
      }
    } else {
      const todasLetrasAdivinhadas = Array.from(spans).every(span => span.textContent !== "_");
      if (todasLetrasAdivinhadas) {
        alert("Parabéns! Você acertou a palavra.");
      }
    }
  }
