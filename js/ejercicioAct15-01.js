/**Ejercicio 1:
    Elaborar un programa que permita ingresar el nombre del trabajador, su sueldo básico y el número de hijos, se deberá mostrar su bonificación y el sueldo final.  Tenga en cuenta que la empresa está dando una bonificación del 7% del sueldo básico sólo en el caso el trabajador tuviese hijos.
*/
let trabajador = prompt("Ingrese el nombre del Trabajador");
let sueldoB = parseInt(prompt("Ingrese el suedo de: "+ trabajador));
let hijos = parseInt(prompt("Ingrese el numero de hijos de: "+trabajador));

bono=0.07;

if(hijos>0){

    sueldoB= (sueldoB*bono)+sueldoB;
}
    sueldoB;
alert("El Sueldo total recibido es: " +"S/" + sueldoB)

