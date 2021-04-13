let nombre = prompt("Ingresa tu nombre y apellido");
let dni= parseInt (prompt("Ingrese su número dni"));
alert("¡Bienvenido! " + nombre);

let nota1 = parseInt(prompt("Ingrese nota de matemáticas"));
let nota2 = parseInt(prompt("Ingrese nota de inglés"));
let nota3 = parseInt(prompt("Ingrese nota de bioquímica"));
let nota4 = parseInt(prompt("Ingrese nota de anatomía"));

function calculoPromedio (nota1, nota2, nota3, nota4) {
    let promedio = (nota1 + nota2 + nota3 + nota4)/4;

    return promedio;
}



alert(calculoPromedio(nota1, nota2, nota3, nota4));

function Calcular() {
    let variable1 = document.getElementById('m1').value;
    let variable2 = document.getElementById('m2').value;
    let variable3 = document.getElementById('m3').value;
    let variable4 = document.getElementById('m4').value;

    let p = (parseFloat(variable1) + parseFloat(variable2) + parseFloat(variable3) + parseFloat(variable4))/4;
    document.getElementById('promedio').innerHTML = p;
}