/** 
 * Switch
 * Es una estructura de control condicional
 * Pero a diferencia del if no se basa en valores de verdad o falso
 * Si no que se basa en opciones
 * ? Nos permite tener multiples opciones
 * ? y con base en la opcion seleccionada ejecuta un bloque de codigo
 * ? tiene una respuesta default, por si la opcion ingresada no esta en la lista
 * 
 * ? Se divide en casos 
 * ? cada caso lleva su bloque de codigo y debe llevar al finalizar la palabra break
 * 
 * Nota:
 * 
 * todo: Expresiones: Es todo aquello que genera un valor
 * * ejemplos: una 
 */


 /* let month = prompt ("Escribe el mes que te gustaria ver")

 switch(month){
    case "Enero":
    alert("El mes de Enero es el primer mes de año");
    break;
    case "Febrero":
    alert(`El mes ${month} es el segundo mes del año "hola"`);

    // "El mes " + month + " es el segundo mes del año"
    break;
    case "Marzo":
        alert(`El mes ${month} es el tercer mes del año`);
        break;
    case "Abril":
    case "Marzo":
        console.log("Abril y marzo)");
        break;
    default:
    alert("El mes seleccionado no aplica")
 }

 */

 let pais = prompt (`Escribe uno de estos paises para conocer su capital 
    Dinamarca
    Canada
    Mexico
    Argentina 
    España`)
 switch (pais) {
    case "Dinamarca" :
        alert(`Su Capital de ${pais} es Copenhague`)
        break;

            case "Canada" :
        alert(`Su Capital de ${pais} es Ottawa`)
        break;

            case "Mexico" :
        alert(`Su capital de ${pais} es CDMX`)
        break;

            case "Argentina" :
        alert(`Su capital de ${pais} es Buenos Aires`)
        break;

        case "España" :
        alert(`Su capital de ${pais} es Madrid`)
        break;

    default:
        alert("El pais seleccionado no aplica")

 }