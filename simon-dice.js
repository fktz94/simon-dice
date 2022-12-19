const cuadrosMaquina = [];
const cuadrosUsuario = [];

function turnoMaquina() {
  let cuadros = document.querySelectorAll(".cuadro");
  for (const cuadro of cuadros) {
    cuadro.classList.remove("hover");
  }
}

function maquinaEligeCuadro() {
  let cuadroRandom = document.getElementById(
    `cuadro-${Math.ceil(Math.random() * 4)}`
  );
  cuadrosMaquina.push(cuadroRandom);
}

function mostrarCuadrosMaquina() {
  for (let i = 0; i < cuadrosMaquina.length; i++) {
    cuadrosMaquina[i].classList.add("cuadro-elegido");
  }
}
// maquinaEligeCuadro();
// mostrarCuadrosMaquina();

function turnoJugador() {}
