const displayValorAnterior = document.getElementById('valor-previo');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumbers = document.querySelectorAll('.number');
const botonesOperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumbers.forEach(boton => {
    boton.addEventListener('click', () => display.addNumber(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});