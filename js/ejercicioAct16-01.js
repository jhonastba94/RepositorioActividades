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






