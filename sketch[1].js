
// 🐶 TOMY CAZADOR DE HUESOS
// SISTEMA INTERACTIVO OP ART + GLITCH



 //ESTADO DEL JUEGO

let estado = 0; 
// 0 = inicio
// 1 = juego
// 2 = victoria
// 3 = derrota


// IMÁGENES

let player;
let boneImg;


// POSICIÓN DEL JUGADOR

let px, py;

//OBJETOS DEL JUEGO

let bones = [];     // huesos (objetivos)
let glitches = [];  // enemigos (obstáculos)


//  SISTEMA DE PUNTOS

let puntos = 0;
let vidas = 3;

// balance de aparición
let boneRate = 30;
let glitchRate = 60;

//  SONIDOS

let sonidoStart;
let sonidoPick;
let sonidoError;

let winSoundPlayed = false;
let loseSoundPlayed = false;


//  PRELOAD (carga de recursos)

function preload() {

  soundFormats('mp3');

  player = loadImage("player.png.png");
  boneImg = loadImage("hueso.png");

  sonidoStart = loadSound("freesound_community-086354_8-bit-arcade-video-game-start-sound-effect-gun-reload-and-jump-81124.mp3");
  sonidoPick = loadSound("freesound_community-gameboy-pluck-41265.mp3");
  sonidoError = loadSound("freesound_community-windows-error-sound-effect-35894.mp3");
}


//  SETUP (inicio del sistema)

function setup() {

  createCanvas(800, 800);

  imageMode(CENTER);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);

  reset(); // inicializa variables del juego
}


// LOOP PRINCIPAL

function draw() {

  background(0);

  // sistema de estados
  if (estado === 0) inicio();
  if (estado === 1) juego();
  if (estado === 2) win();
  if (estado === 3) lose();
}


// ESTADO 0: INICIO

function inicio() {

  fill(255);

  textSize(32);
  text("🐶 TOMY CAZADOR DE HUESOS", width / 2, height / 2 - 80);

  textSize(16);
  text("UTILIZA LAS FLECHAS PARA MOVERTE", width / 2, height / 2 - 20);
  text("RECOGE HUESOS 🦴", width / 2, height / 2 + 10);
  text("EVITA GLITCHES 💥", width / 2, height / 2 + 40);
  text("PRESIONA 2 PARA EMPEZAR", width / 2, height / 2 + 80);
}


//ESTADO 1: JUEGO

function juego() {


  // MOVIMIENTO JUGADOR

  if (keyIsDown(LEFT_ARROW)) px -= 6;
  if (keyIsDown(RIGHT_ARROW)) px += 6;
  if (keyIsDown(UP_ARROW)) py -= 6;
  if (keyIsDown(DOWN_ARROW)) py += 6;

  px = constrain(px, 0, width);
  py = constrain(py, 0, height);


  // FONDO (GRILLA OP ART)

  let size = 50;
  let offset = size / 2;

  for (let x = offset; x < width; x += size) {
    for (let y = offset; y < height; y += size) {

      let d = dist(px, py, x, y);
      let c = map(d, 0, 300, 255, 50);

      fill(c, 80, 255);
      rect(x, y, 40, 40);
    }
  }


  //  GENERACIÓN DE HUESOS

  if (frameCount % boneRate === 0) {
    bones.push({ x: random(width), y: -20 });
  }

  for (let i = bones.length - 1; i >= 0; i--) {

    let b = bones[i];

    image(boneImg, b.x, b.y, 80, 35);
    b.y += 3;

    // colisión jugador - hueso
    if (dist(px, py, b.x, b.y) < 70) {
      bones.splice(i, 1);
      puntos++;

      if (sonidoPick) sonidoPick.play();
    }

    if (b.y > height) bones.splice(i, 1);
  }


  //  GENERACIÓN DE GLITCHES (ENEMIGOS)

  if (frameCount % glitchRate === 0) {
    glitches.push({
      x: random(width),
      y: -20,
      size: random(30, 60),
      speed: random(2, 4)
    });
  }

  for (let i = glitches.length - 1; i >= 0; i--) {

    let g = glitches[i];

    fill(255, 0, 200);
    rect(g.x, g.y, g.size, g.size);

    g.y += g.speed;

    // colisión jugador - glitch
    if (dist(px, py, g.x, g.y) < 60) {
      glitches.splice(i, 1);
      vidas--;

      if (sonidoError) sonidoError.play();
    }

    if (g.y > height) glitches.splice(i, 1);
  }

  //  JUGADOR

  image(player, px, py, 120, 120);


  //  INTERFAZ (UI)

  fill(255);
  textSize(16);
  text("PUNTOS: " + puntos, 100, 20);
  text("VIDAS: " + vidas, 220, 20);

  //  CONDICIONES DE ESTADO
 
  if (puntos >= 12) estado = 2; // win
  if (vidas <= 0) estado = 3;   // lose
}


//  ESTADO 2: VICTORIA

function win() {

  background(0, 255, 120);

  if (!winSoundPlayed && sonidoStart) {
    sonidoStart.play();
    winSoundPlayed = true;
  }

  let salto = sin(frameCount * 0.2) * 25;

  image(player, width / 2, height / 2 - 50 + salto, 160, 160);

  fill(0);
  textSize(40);
  text("¡GANASTE! 🐶", width / 2, height / 2 + 80);

  textSize(16);
  text("PRESIONA 1 PARA REINICIAR", width / 2, height / 2 + 120);
}


// 🔴ESTADO 3: DERROTA

function lose() {

  if (!loseSoundPlayed && sonidoError) {
    sonidoError.play();
    loseSoundPlayed = true;
  }

  background(20);

  // efecto glitch visual
  for (let i = 0; i < 80; i++) {
    fill(random(255), 0, random(255), 120);
    rect(random(width), random(height), random(20, 80), random(20, 80));
  }

  fill(255);
  textSize(30);
  text("SYSTEM ERROR", width / 2, height / 2);

  textSize(16);
  text("PRESIONA 1 PARA REINICIAR", width / 2, height / 2 + 40);
}


// INPUTS DEL SISTEMA

function keyPressed() {

  userStartAudio();

  if (key === "2") {
    estado = 1;
    reset();
    if (sonidoStart) sonidoStart.play();
  }

  if (key === "1") {
    reset();
    estado = 0;
  }
}

// RESET DEL SISTEMA

function reset() {

  px = width / 2;
  py = height / 2;

  puntos = 0;
  vidas = 3;

  bones = [];
  glitches = [];

  winSoundPlayed = false;
  loseSoundPlayed = false;
}