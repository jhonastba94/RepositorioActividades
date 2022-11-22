// Ejercicio 01

const btnSueldoNeto = document.getElementById('btnSueldoNeto');
const sueldoNeto = document.getElementById('btnSueldoNeto');

btnSueldoNeto.addEventListener('click', Sueldototal);

function Sueldototal() {
    const nombreT = document.getElementById('nombreT').value;
    const sueldoB = parseFloat(document.getElementById('sueldoB').value);
    const cantHijos =parseInt(document.getElementById('cantHijos').value);
    let bono = sueldoB*0.07;

    if(cantHijos>0){

       let sueldoF= sueldoB + bono;

       sueldoNeto.innerText=`El Trabajador ${nombreT} Recibira una Bonificacion de S/.${bono}
       Por lo tanto su Sueldo Final sera de S/.${sueldoF} `
    }else{
        sueldoNeto.innerText = `ya que el Trabajador ${nombreT} no tiene hijos,
        No recibira la Bonificacion y solo cobrara su sueldo Base de S/.${sueldoB}`;
    }
        
} 

//Ejercicio 02

const btnNumero = document.getElementById('btnNumero');
const numeroP = document.getElementById('numeroP');

btnNumero.addEventListener('click', ComparaNumero);

function ComparaNumero(){
    const numero = parseFloat(document.getElementById('numero').value);

    if(numero >500){
        let nNumero = numero*0.18
        numeroP.innerText=`El Numero ingresado  es: ${numero}, por lo tanto se procede a 
        calcular el 18% de este, siedo: ${nNumero}`; 
    }else{
        numeroP.innerText=`El Numero es menor a 500 por lo tanto se muestra el mismo numro: ${numero}`
    }

}

//Ejercicio 03

const btnFactorial = document.getElementById('btnFactorial');
const factorial = document.getElementById('factorial');

btnFactorial.addEventListener('click',factorizar);

function factorizar() {
    const nFact = parseInt(document.getElementById('nFact').value);
    let r=1;

for(let i= nFact; i>0;i--){
    r*=i;
    factorial.innerText=`El factorial de ${nFact} es: ${r}`;
}

}