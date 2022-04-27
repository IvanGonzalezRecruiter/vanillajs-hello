let who = ["El perro", "Mi mamá", "Mi novia", "John Lennon", "Mi profesor"];
let what = ["se comió", "pisó", "destruyó", "rompió", "ensució"];
let when = [
  "antes de la clase de 4geeks",
  "apenas acabé",
  "mientras cenaba",
  "mientras dormía",
];

function Generador(quien, que, cuando) {
  numQuien = Math.floor(Math.random() * quien.length);
  numQue = Math.floor(Math.random() * que.length);
  numCuando = Math.floor(Math.random() * cuando.length);
  return quien[numQuien] + "" + que[numQue] + "" + cuando[numCuando];
}
function onLoad() {
  var mensaje = document.getElementById("excusa");
  mensaje.innerHTML = Generador(who, what, when);
}
window.onload = onLoad();
