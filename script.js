let tamaño = 20;

function aumentar() {
  let texto = document.getElementById("texto");
  if (!texto) return;

  tamaño += 5;
  texto.style.fontSize = tamaño + "px";
}

function disminuir() {
  let texto = document.getElementById("texto");
  if (!texto) return;

  tamaño -= 5;
  texto.style.fontSize = tamaño + "px";
}

function cambiarColor() {
  let texto = document.getElementById("texto");
  if (!texto) return;

  let colores = ["red", "blue", "green", "purple", "orange"];
  let random = Math.floor(Math.random() * colores.length);
  texto.style.color = colores[random];
}

function calcular() {
  let num1 = document.getElementById("num1");
  let num2 = document.getElementById("num2");
  let operador = document.getElementById("operador");
  let resultadoTexto = document.getElementById("resultado");

  if (!num1 || !num2 || !operador || !resultadoTexto) return;

  num1 = Number(num1.value);
  num2 = Number(num2.value);
  let op = operador.value;
  let resultado;

  switch(op) {
    case "+": resultado = num1 + num2; break;
    case "-": resultado = num1 - num2; break;
    case "*": resultado = num1 * num2; break;
    case "/": resultado = num2 !== 0 ? num1 / num2 : "Error"; break;
    case "&&": resultado = num1 && num2; break;
    case "||": resultado = num1 || num2; break;
    case "&": resultado = num1 & num2; break;
    case "|": resultado = num1 | num2; break;
    default: resultado = "Operación no válida";
  }

  resultadoTexto.textContent = "Resultado: " + resultado;
}
