let display = document.getElementById('display');
let numeros = document.querySelectorAll('.num');
let num = document.getElementsByClassName('num');
let operadores = document.querySelectorAll('.op');
let igual = document.getElementById('igual');
let limpar = document.getElementById('limpar');

numeros.forEach(function(numero) {
    numero.addEventListener('click', function(e) {
        display.value += e.target.innerText;
    });
});

operadores.forEach(function(operador) {
    operador.addEventListener('click', function(e) {
        display.value += ' ' + e.target.dataset.op + ' ';
    });
});

igual.addEventListener('click', function() {
    let resultado = eval(display.value);
    if (resultado === Infinity || resultado === -Infinity) {
        display.value = 'Não é possível dividir por zero';
    } else {
        display.value = resultado;
    }
});

limpar.addEventListener('click', function() {
    display.value = '';
});

let displayValue = "";

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById("display").value = displayValue;
}

function clearDisplay() {
    displayValue = "";
    document.getElementById("display").value = displayValue;
}
