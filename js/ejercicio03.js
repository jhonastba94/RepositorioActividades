//Ejercicio 3: Un alumno desea saber cuál es su calificación final en un curso, dicha calificación se compone de tres exámenes cuyos pesos son del 30%, 30% y 40%

let Alumno;
let examen1, examen2, examen3;
let Curso;
let CalFinal;

Alumno = prompt('Ingrese el Nombre del Alumno');
examen1 = parseInt(prompt('Ingrese el primer Examen: '));
examen2 = parseInt(prompt('Ingrese el segundo Examen: '));
examen3 = parseInt(prompt('Ingrese el tercer Examen: '));

CalFinal = (examen1*0.3 + examen2*0.3 + examen3*0.4);

alert('La calificacion final de ' +Alumno + ' es :' + CalFinal);