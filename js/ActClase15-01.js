/**Ejercicio 1: 
Digite el importe de una compra, en caso de que el importe sea   150 o más, se le 
descontará el 12%. Mostrar el descuento otorgado y el importe de compra final
*/ 
let importe = parseInt(prompt("Ingrese el importe"));
let descuento = 0.12;
let nImporte = importe;
if(importe>=150){
    nImporte=importe-importe*0.12;
}else {
    nImporte;
}
    

alert("El Nuevo Nuevo importe es: " + nImporte);
