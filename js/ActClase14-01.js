/*
-Crea cuatro variables que contengan números. Asignar un nombre a cada una

-Suma las dos primeras variables juntas y guarda el resultado en otra variable

-Resta la cuarta variable de la tercera y el resultado asignarlo a otra variable.

-Multiplicar el resultado obtenido de las 2 operaciones anteriores, guardar el resultado en una nueva variable llamada resultadoFinal.

*/
const btnEnviar = document.getElementById("btnEnviar")

let VarA, VarB, VarC, VarD;
let SumAB, RestDC;

VarA = parseInt(prompt("Ingrese la Variable A"));
VarB = parseInt(prompt("Ingrese la Variable B"));
VarC = parseInt(prompt("Ingrese la Variable C"));
VarD = parseInt(prompt("Ingrese la Variable D"));

btnEnviar.onclick = function(){

SumAB = VarA+VarB; 
RestDC = VarD-VarC;
ResultadoFinal = SumAB*RestDC;

SumaAB.innerText ="La Suma de las Variables A,B es: "+ SumAB;
RestaDC.innerText ="La Resta de las Variables D,C es: "+ RestDC;
resultado1.innerText ="El resultado Final es: "+ ResultadoFinal;

}