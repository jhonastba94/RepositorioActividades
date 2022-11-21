/**Ejercicio 2: 
    Construir un programa que permita ingresar un número, si el número es mayor de 500, se debe calcular y mostrar en pantalla el 18% de este.
 */


let numero = parseInt(prompt("Ingrese el Numero"));

condi=0.18;

if(numero>500){
    numero=(" mayor a 500, por lo tanto cambia a: "+(numero*condi).toFixed(2));
    
}
    numero;

alert("El Numero ingresado  es: "+numero);


