const texto = document.getElementById("marquesina-text");
let position = window.innerWidth;

const velocidad = 3;

function moverTexto() {
  position -= velocidad;
  texto.style.left = position + "px";

  if (position + texto.offsetWidth < 0) {
    position = window.innerWidth;
  }

  requestAnimationFrame(moverTexto);
}

moverTexto();
