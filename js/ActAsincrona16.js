/*EJERCICIO 01
En base al siguiente código, añadir una función para restar dos números:
*/

const btnMulti = document.getElementById('btnMulti');
const resultM = document.getElementById('resultadoM');

let multipli = function (x,y){
    return x*y;
}
var result = multipli(5,2);
alert(result);

/**Añadiendo boton */

btnMulti.onclick =function(){
    let resul = multipli(15,3);
}


/*********************************************************************** */

const btnExpo = document.getElementById('btnExpo');
const resultE = document.getElementById('resultadoE');

let expo = function (x,y){
    return x**y;
}

result = expo(5,2);
alert (result);

/**Añadiendo boton */

btnExpo.onclick =function(){
    let resul = expo(5,3);
    resultE.innerText = resul;
}



/*********************************************************************** */

const btnSuma = document.getElementById('btnSuma');
const resultS = document.getElementById('resultadoS');

let suma = function(x,y){
    return x+y;
    
}
result = suma(3,4);
alert (result);

/**Añadiendo boton */
btnSuma.onclick =function(){
    let resul = suma(150,350);
    resultS.innerText = resul;
}


/************************************************************************ */

const btnResta = document.getElementById('btnResta');
const resultR = document.getElementById('resultadoR');

let resta = function(x,y){
    return x-y;
}

result = resta(3,4);
alert (result);

/**Añadiendo boton */

btnResta.onclick =function(){
    let resul = resta(350,50);
    resultR.innerText = resul;
}
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
/*EJERCICIO 03
Elabore una funcion Suma
*/


function Sumar() {  
    var x,y,suma;  
    x = document.getElementById("numx").value;  
    y = document.getElementById("numy").value;  
    
      suma=parseFloat(x)+parseFloat(y);  
      result= suma;  
     
    document.getElementById("resultadoS").innerHTML = result;  
  }  