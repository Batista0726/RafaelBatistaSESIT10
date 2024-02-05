function somar() {
    var num1 = document.getElementById("num1").valueAsNumber;
    var num2 = document.getElementById("num2").valueAsNumber;
    var Resultado = num1 + num2;
    document.getElementById("resultadoSoma").textContent = Resultado;
}
function sub(){
    var num3 = document.getElementById("num3").valueAsNumber;
    var num4 = document.getElementById("num4").valueAsNumber;
    var Resultado1 = num3 - num4;
    document.getElementById("resultadoSub").textContent = Resultado1;
}
function multi(){
    var num5 = document.getElementById("num5").valueAsNumber;
    var num6 = document.getElementById("num6").valueAsNumber;
    var Resultado2 = num5 * num6;
    document.getElementById("resultadoMulti").textContent = Resultado2;
}
function div(){
    var num7 = document.getElementById("num7").valueAsNumber;
    var num8 = document.getElementById("num8").valueAsNumber;
    var Resultado3 = num7 / num8;
    document.getElementById("resultadoDiv").textContent = Resultado3;
}