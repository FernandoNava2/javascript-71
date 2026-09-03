//Function expression
// 

const getTriangleArea = function (base, height) {
    return (base * height) / 2;
}

let area = getTriangleArea(20, 24);
console.log(`El area del triangulo de base 20 y altura 24 es ${area}`); 

const evenOrOdd = function (limit) {
    for (let i = 1; i <= limit; i++) {
        if (i % 2 == 0) {
            console.log(`El numero ${i} es par`);
        } else {
            console.log(`El numero ${i} es impar`);
        }
    }
}

evenOrOdd(200);
console.log("esta es otra ejecucion");
evenOrOdd(10);

evenOrOddPrompt();

/*
let x = prompt("Ingresa un numero");
for(let i = 0; i <= x; i++) {
    if( i % 2 == 0) {
        console.log(`El numero ${i} es par`);
    } else {
        console.log(`El numero ${i} es impar`);
    }
}
*/