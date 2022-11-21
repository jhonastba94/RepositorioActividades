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

