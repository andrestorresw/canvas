var x1 = document.getElementById("x1");
var y1 = document.getElementById("y1");
var x2 = document.getElementById("x2");
var y2 = document.getElementById("y2");
var boton = document.getElementById("boton");
var lienzo = document.getElementById("espacio");
var lienzo = lienzo.getContext("2d");

boton = document.addEventListener("click", dibujarLinea);

function dibujarLinea()
{
  lienzo.beginPath();
  lienzo.strokeStyle = "blue";
  lienzo.moveTo(x1.value, y1.value);
  lienzo.lineTo(x2.value, y2.value);
  lienzo.stroke();
  lienzo.closePath();
}
