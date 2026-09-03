/**
 * Callbacks
 * Es una funcion que se pasa como argumento a otra funcion, para ser ejecutada en el momento que la funcion que recibe el callback lo decida
 * ? funciollllllnes ciudadanos de primera clase
 * todas las funciones son tratadas como si fueran un valor, permite pasar a callback
 */

function procesarPago(nombreCliente, callback, cuenta){
    const saldoApagar = callback(cuenta);
    console.log(`El cliente ${nombreCliente} debe pagar: ${saldoApagar} despues de impuestos`);
}


/**Opciones para la funcion de callback 
 * 1. crear funccion aparte y luego mandarla como argumento
 * 2. crear una funcion anonima dentro de los parentesis de la funcion principal
*/

function addiVA(cuenta){
    return cuenta * 1.16;
}

procesarPago("Josue", addiVA, 2000);
//procesar pago con una funcion anonima, 2 ejemplos uno con function y otro con arrow function

console.log("-------------Callabacks anonimas-----------------");
procesarPago(
    "Carlos", 
    function(cuenta){
    return cuenta * 1.2;
}, 
2000,
);

console.log("-------------Callabacks anonimas con arrow function-----------------");

procesarPago("Javier", (pago) => pago * 1.3, 2000);