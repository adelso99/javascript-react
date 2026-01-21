

// Uso de Switch -- permite indicar donde queremos que vaya
//es parecido al if else, pero es msa corto

let accion = "listar";

switch (accion) {  
    case "listar":  //comparacion con la variable accion 
        console.log("Accion de Listar");
        break; //es como la salida

    case "guardar":  //comparacion con la variable accion
        console.log("Accion a Guardar");
        break;
    default:  //es como el else es la salida final
        console.log("Accion no reconocida");
}

