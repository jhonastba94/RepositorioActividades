// Ejercicio - 01
const btnPorcentaje = document.getElementById('btnPorcentaje');
const porcentaje = document.getElementById('porcentaje');

btnPorcentaje.addEventListener('click',porcentajeV_M );

function porcentajeV_M(){

    const varones = parseInt(document.getElementById('varones').value);
    const mujeres = parseInt(document.getElementById('mujeres').value);

    let AlumnosTotal = (varones+mujeres);
 
    let PorVarones = (mujeres*100)/AlumnosTotal; 
    let PorMujeres = (varones*100)/AlumnosTotal;

    porcentaje.innerText = `El Porcentaje de varones es: ${PorVarones.toFixed(2)}% 
    El Porcentaje de Mujeres es: ${PorMujeres.toFixed(2)}%`;
}

//Ejercicio - 02

const btnMonto = document.getElementById('btnMonto');
const monto = document.getElementById('monto');

btnMonto.addEventListener('click',repartirM);

function repartirM(){
    const montoR = parseFloat(document.getElementById('montoR').value);
    
    let montoTotal = montoR;
    let montoLaMar = montoTotal*0.35;
    let montoAbancay = montoTotal*0.25;
    let monto28Julio = montoTotal*0.1;
    let montoAviacion = montoTotal*0.15;
    let montoTacna = montoTotal*0.15;

    monto.innerText = `El Monto Invertido se repartira de la siguiente manera entre las 5 Avenidas: 
    a. Avenida La Mar le corresponde S/.${montoLaMar.toFixed(2)} 
    b. Avenida Abancay le corresponde S/.${montoAbancay.toFixed(2)}
    c. Avenida 28 de Julio le corresponde S/.${monto28Julio.toFixed(2)} 
    d. Avenida Aviacion le corresponde S/.${montoAviacion.toFixed(2)}
    e. Avenida Tacna le corresponde S/.${montoTacna.toFixed(2)}`
}
//Ejercicio - 03
const btnTotalVendido = document.getElementById('btnTotalVendido');
const Vendidos = document.getElementById('Vendidos');

btnTotalVendido.addEventListener('click', VentaTotal);

function VentaTotal(){
    const entradaG = parseFloat(document.getElementById('entradaG').value);
    const entradaMa = parseFloat(document.getElementById('entradaMa').value);
    const entradaMe = parseFloat(document.getElementById('entradaMe').value);

    let totalGeneral = entradaG*150;
    let totalMayores = entradaMa*50;
    let totalMenores = entradaMe*80;

    let TotalVentas = totalGeneral+ totalMayores+totalMenores;
    
    Vendidos.innerText =`En total se Recaudo  S/${totalGeneral} en entradas Generales ,
      En Total se Reacaudo S/${totalMayores} en Entradas de Mayores y 
       y  de C es S/${totalMenores} en entradas de Menores
       En total se Recaudo S/.${TotalVentas} en todo el Evento`;
}