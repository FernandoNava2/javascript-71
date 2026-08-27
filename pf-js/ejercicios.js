//*Ejercicios While

/*
let number = 0;

while (number !== number || number <= 0){

let entrada = prompt("ingresa numero positivo");

if (entrada === null) {
    number = 0;
} else {
    number = Number(entrada);
}
}

console.log(`El numero aceptado es: ${number}`)

*/

/*EJERCICO 2


let suma = 0;
let numero = Number(prompt("ingresa un numero (o 0 para terminar):"));

while (numero !== 0)  {
    suma = suma + numero;
    numero = Number(prompt("ingresa otro numero (o 0 para terminar):"));
}

console.log(`La suma total es de: ${suma}`);
alert(`La suma total es de: ${suma}`);

*/



/** Ejercicios con Do while*/



/*? Ejercico 1

let opcion; 

do {
    opcion = Number(prompt(`
        Menu de cajero automatico:
        1. Consulta de saldo
        2. retirar dinero
        3. Salir
        Elige una opcion del 1 al 3`));

        if (opcion === 1){
            alert("Tu saldo actual es de: 100");
            console.log("El usuario consultó su saldo");
        }else if (opcion === 2){
            alert("Has retirado dinero con exito");
            console.log("El usuario ha retirado dinero");
        }            
        else if (opcion === 3){
            alert("Gracias por usar el cajero automatico. Hasta luego");
            console.log("El usuario salio del menú")
        } else {
            alert("Opcion no valida. Por favor elige 1, 2 o 3");
            console.log("El usuario no ingreso una opcion valida");
        }
    } while (opcion !== 3);

*/

/*Ejercico 2*/


let opcion;
let intentos = 0;

do{
    opcion = prompt("Adivina la palabra secreta, se contará el numero de tus intentos fallidos");
    intentos++;

    if(opcion !== "focus"){
        alert("La palabra es incorrecta, vuelve a intentarlo");
        console.log(`El usuario ha fallado ${intentos}: ingreso ${opcion}`);
    }
} while (opcion !== "focus");

alert(`¡Felicidades! Adivinaste la palabra secreta "Focus". Tu numero de intentos fue de ${intentos}`);
console.log(`El usuario adivino en ${intentos} intentos`);
