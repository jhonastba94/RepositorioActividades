//Ejercicio 2: Leer el sueldo de 3 empleados y aplicarles un aumento del 10%, 12% y 15% respectivamente. Mostrar reporte con los nuevos resultados

let Empleado1;
let Empleado2;
let Empleado3;
var NewSueldoEmp1, NewSueldoEmp2, NewSueldoEmp3;

Empleado1 =parseInt(prompt('Ingrese el Sueldo del  Empleado1'));
Empleado2 =parseInt(prompt('Ingrese el Sueldo del  Empleado2'));
Empleado3 =parseInt(prompt('Ingrese el Sueldo del  Empleado3'));

NewSueldoEmp1 = Empleado1*0.1+Empleado1;
NewSueldoEmp2 = Empleado2*0.12+Empleado2;
NewSueldoEmp3 = Empleado3*0.15+Empleado3;

alert("El nuevo sueldo del Empleado 1 es : " + NewSueldoEmp1 +" "+" "+ " El nuevo sueldo del Empleado 2 es : "+ NewSueldoEmp2 +" "+" "+ "El nuevo sueldo del Empleado 3 es : " + NewSueldoEmp3);
