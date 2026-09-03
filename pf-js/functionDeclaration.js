//Declara la funcion

function saludar(){
    console.log("HOLA")
}

//Usar la funcion (INVOCAR O LLAMAR)

saludar();
saludar();
saludar();

//Funcion con parametros
function saludarConNombre(name, edad){
    console.log(`Hola ${name} mucho gusto en conocerte no sabia que tenias ${edad} años`);
}

//pasando argumentos a una funcion
saludarConNombre("josue", 32);
saludarConNombre("Liz", 27);
saludarConNombre(23, "hola");

/**funcion que retorna algo 
 * !Impornate
 * cuando usamos return
 * !1. Termina la ejecucion de la funcion
 * !2. El valor retornado debe ser ocupado o nunca vamos a ver
 * */

function multiplyToNumber(a, b){
    if(typeof a == "number" && typeof b == "number"){
        return a * b;
    } else {
        return "por favor envia dos numeros"; // Finaliza ejecución
    }
    console.log("nunca me vas a ver");
}

// Llamada correcta (no muestra nada en consola porque no se imprime ni guarda el retorno)
multiplyToNumber(2, 3);

// Imprimiendo el valor de retorno en consola
console.log(multiplyToNumber(3, 5));
console.log(multiplyToNumber(3, "josue"));
