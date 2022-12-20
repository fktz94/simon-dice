let cuadrosMaquina = [];
let cuadrosUsuario = [];

document.getElementById("comenzar").onclick = jugar;

function turnoMaquina() {
  let cuadros = document.querySelectorAll(".cuadro");
  for (const cuadro of cuadros) {
    cuadro.classList.remove("hover");
  }
  bloquearCuadros();
}

function maquinaEligeCuadro() {
  let cuadroRandom = document.getElementById(
    `cuadro-${Math.ceil(Math.random() * 4)}`
  );
  cuadrosMaquina.push(cuadroRandom);
}

function resaltarCuadro($cuadro) {
  $cuadro.classList.remove("despintar");
  $cuadro.classList.add("resaltar");
  setTimeout(function () {
    $cuadro.classList.add("despintar");
  }, 500);
}

function mostrarCuadrosMaquina() {
  cuadrosMaquina.forEach(function ($cuadro, index) {
    const RETRASO_MS = (index + 1) * 1000;
    setTimeout(function () {
      resaltarCuadro($cuadro);
    }, RETRASO_MS);
  });
}

function turnoJugador() {
  const RETRASO_TURNO_JUGADOR = (cuadrosMaquina.length + 1) * 1000;
  setTimeout(function () {
    desbloquearCuadros();
  }, RETRASO_TURNO_JUGADOR);
}

function bloquearCuadros() {
  document.querySelectorAll("#cuadro").forEach(function ($cuadro) {
    $cuadro.onclick = function () {};
  });
}

function desbloquearCuadros() {
  let cuadros = document.querySelectorAll(".cuadro");

  cuadros.forEach(function (cuadro) {
    cuadro.onclick = recibirClickUsuario;
  });

  for (const cuadro of cuadros) {
    cuadro.classList.remove("resaltar");
    cuadro.classList.remove("despintar");
    cuadro.classList.add("hover");
  }
}

function recibirClickUsuario(event) {
  const $cuadro = event.target;
  cuadrosUsuario.push($cuadro);

  const $cuadroMaquina = cuadrosMaquina[cuadrosUsuario.length - 1];
  if ($cuadro.id !== $cuadroMaquina.id) {
    perder();
    return;
  }

  if (cuadrosMaquina.length === cuadrosUsuario.length) {
    continuar();
  }
}

function jugar() {
  restart(); // NO ES NECESARIO QUE SE EJECUTE TODO EL TIEMPO, SOLO CUANDO SE DESEE VOLVER A EMPEZAR
  cuadrosUsuario = [];
  turnoMaquina();
  maquinaEligeCuadro();
  mostrarCuadrosMaquina();
  turnoJugador();
}

function continuar() { // PODRÍA SER UNA SOLUCIÓN
  cuadrosUsuario = [];
  turnoMaquina();
  maquinaEligeCuadro();
  mostrarCuadrosMaquina();
  turnoJugador();
}

function perder() {
  mostrarPerdiste();
  cuadrosMaquina = [];
  turnoMaquina();
}

function mostrarPerdiste() {
  const txt = document.getElementById("perdiste");
  txt.style.display = "flex";
  txt.style.opacity = 1;
  const cuadros = document.querySelectorAll(".cuadro");
  cuadros.forEach(function (cuadro) {
    cuadro.classList.add("opacity");
  });
}

function restart() {
  const txt = document.getElementById("perdiste");
  txt.style.display = "none";
  txt.style.opacity = 0;
  const cuadros = document.querySelectorAll(".cuadro");
  cuadros.forEach(function (cuadro) {
    cuadro.classList.remove("opacity");
  });
}
