// Bolinha
let xBolinha = 300;
let yBolinha = 200;
let tamBolinha = 20;
let xvel = 5;
let yvel = 5;

// Raquete jogador
let xRaquete1 = 10;
let yRaquete1 = 150;
let largura = 10;
let altura = 90;

// Raquete oponente
let xRaquete2 = 580;
let yRaquete2 = 150;
let velOponente = 5;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0, 128, 0); // mesa verde estilo tênis

  // Bolinha
  circle(xBolinha, yBolinha, tamBolinha);
  xBolinha += xvel;
  yBolinha += yvel;

  // Rebote nas bordas
  if (xBolinha + tamBolinha / 2 > width || xBolinha - tamBolinha / 2 < 0) {
    xvel *= -1;
  }
  if (yBolinha + tamBolinha / 2 > height || yBolinha - tamBolinha / 2 < 0) {
    yvel *= -1;
  }

  // Raquete jogador
  rect(xRaquete1, yRaquete1, largura, altura);

  // Movimento jogador
  if (keyIsDown(87)) yRaquete1 -= 6; // W
  if (keyIsDown(83)) yRaquete1 += 6; // S

  // Raquete oponente
  rect(xRaquete2, yRaquete2, largura, altura);
  if (yBolinha < yRaquete2 + altura / 2) {
    yRaquete2 -= velOponente;
  } else {
    yRaquete2 += velOponente;
  }

  // Colisão jogador
  if (
    xBolinha - tamBolinha / 2 < xRaquete1 + largura &&
    yBolinha > yRaquete1 &&
    yBolinha < yRaquete1 + altura
  ) {
    xvel *= -1;
  }

  // Colisão oponente
  if (
    xBolinha + tamBolinha / 2 > xRaquete2 &&
    yBolinha > yRaquete2 &&
    yBolinha < yRaquete2 + altura
  ) {
    xvel *= -1;
  }
}
