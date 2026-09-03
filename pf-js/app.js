/**
 *  Objetos en JS (JSON)
 * Son una estructura de datos, similar a diccionarios o mapas
 * ? Se organiza en pares
 * ? LLave: valor asociado
 * ? Es una estructura de dadtos desordenada
 * ? Aqui los datos se obtienen mediante su llave
 * !No son los mismos objetos que los mismos objetos que los de programacion orientada a objetos
 * 
 * 
 * Curiosidades
 * Esta notacion se volvio el estandar para intercambio de informacion 
 * Entre cliente y servidor en la WEb
 * JSON (Javascript object Notation)
 * Todas las funciones por defecto retornan undefined
 * 
 */

//como declarar un objeto
const participante = {
    name: "Natalia",
    lastname: "Coca",
    age: 25,
    isAlive: true,
    sayHi: function(){
        console.log("Natalia dice Hola");
    },

    
};

//Como acceder a los valores
//1.Notacion punto (mas usado)
//2. Notacion corchetes, el nombre va entre comillas va como si fuera string (mas usado en objetos dinamicos

console.log(`El nombre del participante es: ${participante.name}, obtenido con notacion punto`);

console.log(`El nombre del participante es: ${participante["name"]}, obtenido con notacion corchetes`);

console.log(`El segundo nombre del participante es ${participante.lastname}, obtenido con notacion punto`);

console.log(participante.sayHi());

//*como agregar un nuevo par llave valor

console.log(participante);


//?agregando un array como valor

participante.favoriteAnimals = ["Tortuga", "Gato", "Cuervo"];
console.log(participante);

participante.favoriteFoods = ["Pizza", "Hamburguesa", "Helado"];
console.log(participante);

participante.adress = ["Mexico", "CDMX", "Coyoacan"];
console.log(participante);


//?agregando un objeto como valor a llave adress

participante.adress = {
    zipCode: "12345",
    country: "Mexico",
};

//como accedemos a la info de objetos o array anidados (objetos o arrays dentro de otro objeto, u otro array)

console.log(
    `El primer animal favorito de ${participante.name} es: ${participante.favoriteAnimals[0]}`
);
console.log(participante.favoriteAnimals);

console.log(
    `El codigo postal de ${participante.name} es: ${participante.adress.zipCode}`
);
console.log(
    `El pais de ${participante.name} es: ${participante.adress.country}`
);

console.log(`El segundo animal favorito de ${participante.name} es: ${participante.favoriteAnimals[1]}`);

//*como modificar el valor de una llave
participante.age = 22;
console.log(participante.age);

//*como eliminar una llave (casi no usada)
delete participante.ch;
console.log(participante);

//como iterar sobre el objeto

for(const llave in participante){
    console.log(`El valor de la llave ${llave} es ${participante[llave]}`);
}

//Obteniendolo desde adentro
for(const llave in participante.adress){
    console.log(`El valor de la llave ${llave} es ${participante.adress[llave]}`);
}