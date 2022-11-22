// Ejercicio 1 
const btnPromedio = document.getElementById('btnPromedio');
const Promedio = document.getElementById('Promedio');

btnPromedio.addEventListener('click', promedio);

function promedio(){
    const NotaA = parseFloat(document.getElementById('NotaA').value);
    const NotaB = parseFloat(document.getElementById('NotaB').value);
    const NotaC = parseFloat(document.getElementById('NotaC').value);
    
    let promedioF = (NotaA+NotaB+NotaC)/3;
    
    Promedio.innerText =`El promedio de las 3 notas es ${promedioF.toFixed(2)}`;
}


// Ejercicio 2 
const btnAumento = document.getElementById('btnAumento');
const Aumento = document.getElementById('Aumento');

btnAumento.addEventListener('click', aumento);

function aumento(){
    const EmpleadoA = parseFloat(document.getElementById('EmpleadoA').value);
    const EmpleadoB = parseFloat(document.getElementById('EmpleadoB').value);
    const EmpleadoC = parseFloat(document.getElementById('EmpleadoC').value);
    let AumentoA = EmpleadoA*110/100;
    let AumentoB = EmpleadoB*112/100;
    let AumentoC = EmpleadoC*115/100;
    
    Aumento.innerText =`El nuevo sueldo de A es S/${AumentoA},\n  de B es S/${AumentoB} \n y  de C es S/${AumentoC}`;
}


// Ejercicio 3 
const btnPromedio2 = document.getElementById('btnPromedio2');
const promedioFinal = document.getElementById('promedioFinal');

btnPromedio2.addEventListener('click', PromedioFinal);

function PromedioFinal(){
    const pExamen = parseFloat(document.getElementById('pExamen').value);
    const sExamen = parseFloat(document.getElementById('sExamen').value);
    const tExamen = parseFloat(document.getElementById('tExamen').value);
    let PromFinal = (pExamen*0.3)+(sExamen*0.3)+(tExamen*0.4);
    
    promedioFinal.innerText =`Tu Calificación Final del Curso es ${PromFinal}`;
}