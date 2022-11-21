/*EJERCICIO 1
Un maestro desea saber qué porcentaje de hombres y qué porcentaje de mujeres hay en un grupo de estudiantes. Elaborar un programa que permita ingresar la cantidad de varones y mujeres y muestre el porcentaje de estos para su grupo de estudiantes.*/
 

let PorVarones, PorMujeres;
let varones =parseInt(prompt("Ingrese la cantidad de Varones"));
let mujeres =parseInt(prompt("Ingrese la cantidad de Mujeres"));

AlumnosTotal= (varones+mujeres);
 
PorVarones=(varones*100)/AlumnosTotal; 
PorMujeres=(mujeres*100)/AlumnosTotal; //

porcentajeV.innerText="El Porcentaje de Varones es: "+PorVarones+"%";
porcentajeM.innerText="El Porcentaje de Mujeres es: "+PorMujeres+"%";
