
/*Ejercicio 3: 
    Crea una aplicación que pida un número y calcule su factorial (El factorial de un número es el producto de todos los enteros entre 1 y el propio número y se representa por el número seguido de un signo de exclamación. Por ejemplo 5! = 1x2x3x4x5=120) 
*/

const fact = parseInt(prompt("Ingrese el numero que desea obtener su factorial"));
let r=1;

for(let i= fact; i>0;i--){
    r*=i;

}
alert("El factorial de: "+r);
