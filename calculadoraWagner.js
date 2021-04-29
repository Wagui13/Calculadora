var numero1 = 0
var operador
var numero2 = 0

function calcular(numero1, operador, numero2) {
    switch (operador) {
        case "+": return numero1 + numero2
        case "-": return numero1 - numero2
        case "*": return numero1 * numero2
        case "/": return numero1 / numero2
        case "%": return numero1 % numero2
    }
}

function setarNumeros(numero) {
    var texto = document.getElementById("visor").innerText
    if (!operador) {
        numero1 = parseFloat(texto + numero)
    } else {
        numero2 = parseFloat(numero2 + "" + numero)
    }
    document.getElementById("visor").innerHTML += numero
}

function setarOperadores(operador2) {
    if (!operador) {
        operador = operador2
    } else {
        setarResultado()
        operador = operador2
    }
    document.getElementById("visor").innerHTML += operador2
}

function setarResultado() {
    var resultado
    if (operador) {
        resultado = calcular(numero1, operador, numero2)

    }
    document.getElementById("visor").innerHTML = resultado
    operador = ""
    numero2 = 0
    numero1 = resultado
}

function limpar() {
    numero1 = 0
    numero2 = 0
    operador = ""
    document.getElementById("visor").innerHTML = ""
}