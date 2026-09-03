/**
 *  Funciones flecha (arrow function)
 * !importante
 * Return implicito
 * Quier decir que si tu funcion se puede escribir en una sola linea
 * sin necesidad de llaves, no es necesario poner la palabra return
 * la expresion a la que apunte la flecha sera retornada
 * 
 * Expresiones lambda
 * 
 */

const addTwoNumbers = (a, b) => a + b;
let result = addTwoNumbers(3, 4);
console.log(`El resultado de sumar 3 + 4 es ${result}`);

const evenOrOddArrow = (limit) => {
    let total = 0;
    for (let i = 1; i <= limit; i++) {
        if (i % 2 == 0) {
            console.log(`es par`);
        } else {
            console.log(`es impar`);
        }
        total += i;
    }
    return total;
}

console.log(evenOrOddArrow(100));