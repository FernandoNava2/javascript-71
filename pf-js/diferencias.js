/**
 *  DIFERENCIAS
 * Hoisting
 * Es un proceso por el cual las function declaration y las variables escritas con var, pasan a a estar hasta arriba en el proceso de ejecucion
 * Function Expresion y arrow Function no pasan por este proceso
 */
//**Funcion expresion*/


console.log("function declaration " + multiplyNumbers(20, 6));
const addNumbers = function (a, b){
    return a + b;
}

const divideNumbers = (a, b) => a / b;

function multiplyNumbers(a, b){
    return a * b;
}

console.log(divideNumbers(10, 2));


