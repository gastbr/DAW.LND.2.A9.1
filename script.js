a = 0
b = 0
c = 0

function pedirValores() {
  a = Number(prompt("Introduce valor de A"))
  b = Number(prompt("Introduce valor de B"))
  c = Number(prompt("Introduce valor de C"))
}

function imprime(nombre) {
  document.getElementById("test").innerHTML =
  "Este es el valor de a: " + a + "<br>Este es el valor de b: " + b + "<br>Este es el valor de c: " + c + "<br><br>Resultado de a + b + c = " + (a + b + c) + "<br><br>Mi nombre es " + nombre
}

// pedirValores()
imprime("Pepe")