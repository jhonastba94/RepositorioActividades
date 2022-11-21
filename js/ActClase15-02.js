/*Ejercicio 2: 
Ingrese el nombre de un alumno y las notas de su examen parcial, examen final y el 
promedio de prácticas; muestre el nombre del alumno y su promedio final solo si el 
alumno está aprobado. Tenga en cuenta que para el cálculo del promedio la nota del 
examen final tiene peso doble.
 */
let alumno = prompt("Ingrese el Nombre del Alumno");

let parcial1 = parseInt(prompt("Ingrese la nota del primer Parcial"));
let parcial2 = parseInt(prompt("Ingrese la nota del segundo Parcial"));
let parcial3 = parseInt(prompt("Ingrese la nota del tercer Parcial"));

let practica1 = parseInt(prompt("Ingrese la nota de la Primera Practica"));
let practica2 = parseInt(prompt("Ingrese la nota de la Segunda Practica"));

let examenFinal = parseInt(prompt("Ingrese la nota del Examen Final"));

promParcial= (parcial1 + parcial2 + parcial3)/3;
promPracticas = (practica1 + practica2)/2;

promedioFinal = promParcial*0.25 + promPracticas*0.25 + examenFinal*0.5;

if(promedioFinal>10){
    alert("El Alumno Aprobo con nota de: "+ promedioFinal.toFixed(2));
}else{
    alert("");
}
