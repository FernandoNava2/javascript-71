/**Prompt:
 * 1. Hay que asignar su uso a una variable para luego poder usar el valor que ingreso el usuario
 * 1.2 Usar el valor inmediatamente
 * !importante
 * 1. No se recomienda su uso en aplicaciones en produccion (usada por gente)
 * 2. Bloquea el codigo, esto quiere decir que el codigo que este debajo de donde escribimos el uso del prompt no se va ejecutar, hasta que el usuario ingrese algo.
 * 3. No se puede personalizar
 * 4. Todo lo qu ingresa mediante prompt siempre va a ser un String
 * 
 * Nota:
 * ? \n es un caracter que nos inserta un salto en linea
 */

//const edad = prompt("ingresa tu edad", 24);
//const nombre = prompt("ingresa tu nombre");

//console.log(edad);
//console.log("hola soy " + nombre + " y tengo " + edad + " años");

//alert("hola soy " + nombre + " y tengo " + edad + " años");

const serie = prompt("ingresa tu pelicula o serie favorita");
const personaje = prompt("ingresa tu personaje favorito de una pelicula o serie");
const razon = prompt("Por que es tu personaje favorito?");

console.log(serie);
console.log(personaje);
console.log(razon);

alert("En la seire " + serie + " sale el personaje " + personaje + " y es mi favorito " + razon)


