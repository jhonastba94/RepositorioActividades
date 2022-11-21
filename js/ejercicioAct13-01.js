//Ejercicio 1: Se requiere calcular el promedio de 3 notas ingresadas por el teclado.


let nota1;
let nota2;
let nota3;
let promedio;


nota1 = parseInt(prompt('Ingrese la nota1'));
nota2 = parseInt(prompt('Ingrese la nota2'));
nota3 = parseInt(prompt('Ingrese la nota3'));

promedio = (nota1+nota2+nota3)/3;

document.write('El Promedio de las tres notas es: ' + promedio.toFixed(2));
