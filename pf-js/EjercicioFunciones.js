/*Generar numero screto entre 1 y 10 sin usar return
Crear una funcion
2. No tiene parametros
3. Tampoco tiene return
4. Para que el usuario adivine el numero secreto
4.  Bucles y condicionales
5. el usuario tiene 3 intentos
6. Si el usuario ingresa el numero incorrecto darle una pista
el numero es secreto es mayor o el numero secreto es menor
*/

const numero = function (min, max) {
  return Math.round(Math.random() * (max - min) + min);
};

jugar = function () {
  let num = numero(1, 10);
  let seguir = 0;
  let intentos = 3;

  do {
    num = numero(1, 10);
    alert("Jugemos a adivinar un numero. \nGenerando numero aleatorio...");
    for (let i = 0; i < intentos; i++) {
      let numUsurio = parseInt(
        prompt(
          `¿Sabes que número es? \nTienes tres intentos\n\nIngresa tu intento ${i + 1}`,
        ),
      );
      if (numUsurio == num) {
        alert(`¡Felicidades!\n Haz adivinado. El numero es: ${num}`);
      } else {
        let intentosRestantes = (i + -2) * -1;
        alert(`Incorrecto, te queda ${intentosRestantes} intentos`);
        if (intentosRestantes == 0) {
          alert(
            `¡Fin del Juego! \nHaz perdido, suerte para la proxima. \nEl número Secreto era: ${num}`,
          );
          seguir = parseInt(prompt(`¿Quieres Jugar otra ves?\n1. Si.\n2. No.`));
        }
      }
    }
  } while (seguir == 1);
};

console.log(jugar())

/*
const secretNumber = function(){
    let min = 1;
    let max = 10;
    // Genera un número aleatorio entre 1 y 10
    let randomNum = Math.random() * (max - min) + min;
    let secret = Math.floor(randomNum);

    for (let i = 0; i <= 2; i++){
        const a = prompt("Adivina el número secreto entre 1 y 10");

        if (a == secret){
            alert("¡Felicidades! Adivinaste el número secreto");
            break;
        }else{
            if (a < secret){
                alert("El número secreto es mayor");
            }else{
                alert("El número secreto es menor");
            }
        }
    }
}

secretNumber();
*/


/*
function adivinarNumero() {
  let min = 1;
  let max = 10;
  let numeroSecreto = Math.floor(Math.random() * (max - min + 1)) + min;

  let adivino = false;

  for (let intento = 1; intento <= 3; intento++) {
    // El signo '+' al inicio convierte el texto de prompt() a número
    let numeroUsuario = +prompt(`Intento ${intento} de 3. Ingresa un número entre ${min} y ${max}:`);

    if (numeroUsuario === numeroSecreto) {
      console.log(`¡Felicidades! Adivinaste el número secreto (${numeroSecreto}) en el intento ${intento}.`);
      adivino = true;
      break; 
    } else if (numeroUsuario < numeroSecreto) {
      console.log("Pista: El número secreto es mayor.");
    } else if (numeroUsuario > numeroSecreto) {
      console.log("Pista: El número secreto es menor.");
    }
  }

  if (!adivino) {
    console.log(`Agotaste tus 3 intentos. El número secreto era: ${numeroSecreto}.`);
  }
}
  */