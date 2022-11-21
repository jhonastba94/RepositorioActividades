/******************************************************************** */
/*EJERCICIO 2
La municipalidad de Pueblo Libre piensa invertir cierto monto de dinero en la reparación de las pistas en las avenidas principales. Desarrollar un pseudocódigo que permita ingresar un monto de inversión en soles y lo reparta en la refacción de cinco avenidas de la siguiente manera: 

a. Avenida La Mar - 35% del monto 
b. Avenida Abancay - 25% del monto 
c. Avenida 28 de Julio - 10% del monto 
d. Avenida Aviación - 15% del monto 
e. Avenida Tacna - restante del monto */

let inversion = parseInt(prompt("Ingrese el Monto de Inversion:"));

alert("Inverion para Av La Mar es: "+inversion*0.35);
alert("Inverion para Av Abancay es: "+inversion*0.25);
alert("Inverion para Av 28 de julio es: "+inversion*0.10);
alert("Inverion para Av Aviacion es: "+inversion*0.15);
alert("Inverion para Av Tacna es: "+inversion*0.15);

