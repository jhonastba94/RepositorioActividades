
/*EJERCICIO 3
Una empresa realiza anualmente un evento para fines solidarios con las comunidades nativas del Perú, para ello, se requiere un algoritmo que permita ingresar la cantidad de entradas vendidas de los tres tipos detallados en el siguiente tarifario:
    ____________________________________________
   |         Concepto            |   Precio     |
   |     Entrada General         |   S/. 150.00 |
   | Entrada para mayor de 65    |   S/. 50.00  |
   | Entrada paa menores de edad |   S/. 80.00  |
   |____________________________________________|
*/

let event;
let EntGeneral =parseInt(prompt("Ingrese la  Cantidad de asistentes a General"));
let EntMayores =parseInt(prompt("Ingrese la Cantidad de asistentes Mayores de 65 años"));
let EntMenores =parseInt(prompt("Ingrese la Cantidad de asistentes Menores de Edad"));

totalGeneral = EntGeneral*150;
totalMayores = EntMayores*50;
totalMenores = EntMenores*80;

totalRecaudado = totalGeneral + totalMayores + totalMenores;

recaudado_General.innerText="El total Recaudado en entradas General es de: S/."+totalGeneral;
recaudado_Mayores.innerText="El total Recaudado en entradas para Mayoes es de: S/."+totalMayores;
recaudado_Menores.innerText="El total Recaudado en entradas para Menores es de: S/."+totalMenores;

Recaudado_Total.innerText="El Total Recaudado fue de: "+totalRecaudado;
