const visor = document.getElementById('resultado');

function insert(num) {
visor.innerHTML += num
}

function clean () {
    visor.innerHTML = ""
}

function back () {
let resultado = visor.innerHTML;
visor.innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular () {
let resultado = visor.innerHTML
visor.innerHTML = eval(resultado)

}