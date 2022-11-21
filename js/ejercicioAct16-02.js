////////////////////////////////////////////////////////////////////////////////
/*EJERCICIO 02
En base al siguiente código: añadir una función para pasar de Farenheit a Celsius: 
*/

const btnFarenheit = document.getElementById("btnFarenheit");
const resultF = document.getElementById('resultadoF'); 
 

let pasaraFarenheit = (grado) => {return result = (grado *1.8) + 32};
var result = pasaraFarenheit(10); 
alert(result.toFixed(2)+"°F");

/**Agregando Boton */
btnFarenheit.onclick =function(){
    let resul = pasaraFarenheit(10);
    resultF.innerText = resul.toFixed(2)+"°F";
}

/*************************************************************************** */

//Funcion Pasar  de Farenheit a Celsius

const btnCelcius = document.getElementById("btnCelcius");
const resultC = document.getElementById('resultadoC'); 
 

let pasaraCelciust = (grado) => {return result = (grado - 32) *(5/9)};
var result = pasaraCelciust(100); 
alert(result.toFixed(2)+"°C");

/**Agregando Boton */
btnCelcius.onclick =function(){
    let resul = pasaraCelciust(100);
    resultC.innerText = resul.toFixed(2)+"°C";
}