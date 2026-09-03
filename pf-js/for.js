
/**
 *    For loop
 * Es una estructura de control repetitiva
 * El bloque de codigo dentro se va a repetir n veces
 * ?  El bucle for cuenta con 3 partes dentro de los parentesis
 * ? 1. Una variable que actua como contador, comun es que se llame i
 * ? 2. Es la condicon de ejecucion, esto quiere decir la condicion que mientras sea verdarea, el bucle se va ejecutar
 * ? 3. El incremento del contador 
 * Nota
 * Se suele usar mucho para recorrer arrays
 * Metodo para saber el tamaño de un array
 * nombreArray.length
 */

const numeros = [
  12, 45, 7, 89, 23, 56, 34, 78, 91, 10,
  67, 32, 4, 76, 54, 21, 98, 43, 65, 11,
  87, 29, 50, 73, 16, 94, 38, 61, 8, 82,
  27, 69, 14, 95, 41, 58, 3, 77, 36, 84,
  19, 63, 47, 90, 25, 71, 6, 53, 80, 31,
  99, 42, 17, 68, 35, 86, 22, 74, 9, 57,
  93, 40, 15, 62, 28, 81, 5, 70, 48, 96,
  24, 59, 33, 88, 13, 66, 44, 79, 2, 55,
  97, 30, 18, 72, 46, 85, 20, 64, 39, 92,
  1, 52, 26, 75, 49, 83, 37, 60, 51, 100
];

console.log(`El tamaño del array es ${numeros.length}`);

/*for(let i = 0; i < numeros.length; i++){
    console.log(`El numero en la posicion ${i} es ${numeros[i]}`);
} 
*/

/*
//*Ejercico de suma 
let total = 0;
for (let c = 0; c < numeros.length; c++) {
    //Sintaxis tradicional
    total = total + numeros[c];
    console.log(`El valor actual del acumulado es ${total}`);
    //* Sintaxis abreviada 
    //*total += numeros [c]; 
    
}
console.log(`La suma de los 100 elementos del array es ${total}`);

*/

/**
 * 1. Usar un for para recorrer el array de numeros
 * 2. En cada iteracion mostrar en consola si el numero es para o impar
 */

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
        console.log(`${numeros[i]} es par`);
    }else {
        console.log (` ${numeros[i]} es impar`);
    }

}
    
