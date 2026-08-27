/**
 * 
 *      For loop
 * Estructura de datos 
 * 
 * Son estructuras que nos ayudan a agrupar y/o ordenar datos
 * Para manipular estos datos de manera mas eficiente
 * Datos no representa nada por si solo
 * Datos juntos y dandoles contexto se vuelve informacion
 * 
 * 
 *   *Array
 * Es una estrucutua de datos ordenada
 * !importante
 * Los datos  se identifican por un indice, el indice empieza a contar desde 0
 * El tamaño real se cuenta desde el 1
 * 
 * !importante pero particular de JS
 * Podemos guardar cualquier tipo de dato dentro de array, incluso combinaciones 
 * Tiene tamaño dinamico 
 * 
 */

//definicion de un array

const arrayVacio = [];

const arrayContenido = ["Alberto", 20, true];

const months = ["Jan", "March", "April", "June"];

/**obtencion de un elemento guardado en un array
 * notacion corchete
*/

console.log(arrayContenido[1]);
console.log(arrayContenido[0]);
console.log(arrayContenido[3]);

/**
 * Ingresar datos al array
 * Metodos
 * 
 * 1. Unshift para ingresa elementos al comienzo del array
 * 
 *
 * 2. Push para ingresa elementos al final del array
 * 
 */

console.log("Array antes")
console.log(arrayContenido);
arrayContenido.unshift("Javier");
console.log("Array despues");
console.log(arrayContenido);

console.log("Array antes")
console.log(arrayContenido);
arrayContenido.push("Daniel",false);
console.log("Array despues");
console.log(arrayContenido);

/**
 *     Elimina datos
 * 1. Shift elimina y devuelve el elemento en la posicion 0
 * 2. Pop elimina y devuelve el ultimo elemento del array
 * 
 * Lo que va dentro de los parentesis de un metodo o funcion se conoce como argumento
 * 
 */

console.log("Array antes")
console.log(arrayContenido);
// arrayContenido.shift();
console.log(`Elemento eliminado ${arrayContenido.shift()}`);
console.log("Array despues");
console.log(arrayContenido);

console.log("Array antes")
console.log(arrayContenido);
// arrayContenido.pop();
console.log(`Elemento eliminado ${arrayContenido.pop()}`);
console.log("Array despues");
console.log(arrayContenido);


/**
 * Reasignar el valor de un indice
 */


let valorAnterior = arrayContenido[0];
arrayContenido[0] = "Liz";
arrayContenido[2] = "Josue";
console.log("el valor anterior es: " + valorAnterior);
console.log(`Resultado de la reasignacion de un elemento ${arrayContenido}`);
console.log(arrayContenido);

/**
 * Splice 
 * Elimina elementos o agrega
 */

console.log("======Splice")
arrayContenido.splice(1, 1);
console.log(arrayContenido);
arrayContenido.splice(1, 2)
console.log(arrayContenido);

//agregar elementos 

months.splice(3, 0, "guantes", "sabanas");
console.log(months);