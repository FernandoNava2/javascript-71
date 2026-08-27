/**
 * ?   Loops
 * Son estructuras de control
 * Que nos permiten repetir n cantidad de veces en un bloque de codigo {}
 * 
 * ? Tres tipos:
 * ? 1.While             2. Do While        3. For  
 * 
 * 
 * While 
 * Es loop que se ejecuta mientras una condicion sea verdadera
 * En cuanto esta condicion se vuelve falsa para
 * ! Importante
 * ! NEcesita un contador externo o una forma de para
 * ! No olvidar actualizar el contador
 * ! Puedes Generar un bucle infinito
 */

/* 1. Contador 

let counter = 0;

 2. Iniciamos el bucle 

while(counter <= 100){
    console.log(counter);
    counter = counter + 1;
}
*/    




let counter = 0;
counter = 0;
//*? % operador modulo regresa el residuo de division____ejemplo:      5 % 2 = 1   6 % 2 = 0 */
 

while(counter < 200){
    if(counter % 2 == 1){
        console.log(`El numero ${counter} es par`);
    } else {
        console.log(`El numero ${counter} es impar`)
    }
     //*Operador de incremento suma 1 a el valor de la variable   */
     counter++; 
}


