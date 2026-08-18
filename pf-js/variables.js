/**
 * En javascript hay 3 formas de declarar variables
 * !Existe una forma que ya no se recomienda su uso
 * !var
 * al proceso de crear una variable y darle un valor se llama asignacion
 * 
 * A las variables que pueden ser reasignadas (pueden cambiar en un futuro el valor que tienen) se declaran:
 * ? let nombreVariable = valor;
 * 
 * *el operador = se conoce como operador de asignacion
 * 
 * Una vez creada una variable podemos usarla en otris lugares del codigo utilizando su nombre, las variables al ser utilizadas no van entre comillas ""
 * 
 * Las variables que no pueden ser reasignadas (su valor puede * cambiar)
 * se declaran:
 * ! const nombreVariable =valor;
 * 
 * Nota:
 * Palabras reservadas: Son palabras que utiliza el lenguaje de * programacion
 * y si intentamos usarlas en otros lados pueden generar *errores.
 */

let nombre = "fernando"; //tipo string
let name = "Alejandro";
console.log(nombre);
console.log(name);

const birthYear = 2001; //tipo numero
console.log(birthYear);

/** Reasignando una variable (cambiando el valor que tiene)
  cuando reasignamos una variable (una variable ya creada) 
  *!ya no es necesario poner let
*/

nombre = "Brenfer"
console.log(nombre);
console.log(name);

/** Seccion de pruba
 * 
 * 
birthYear = 1995;
 */

/**Concatenar es como encadenar
 * Nos permite pegar el valor de una variable aa un texto
 */

console.log ("Hola soy " + nombre + " y estoy en gen con " + name + " naci en el año " + birthYear)


