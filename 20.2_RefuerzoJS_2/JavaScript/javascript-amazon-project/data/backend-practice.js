//Practica para comunicacion entre front-ent y back-end con HTTP

//creacion de msj http con el uso de la clase "XMLHttpRequest"
const xhr = new XMLHttpRequest();

//Para Obtener la respuesta del mensaje enviado es necesario un evento para esperar la respuesta ya que esta no es inmediata
xhr.addEventListener("load", () => {
  console.log(xhr.response);
});

//confuracion de msj
//se debe de configurar 2 parametros: P1. define el tipo de menaje http se envia y el P2. indica a la compu donde enviar ese mensaje http
xhr.open("get", "https://supersimplebackend.dev/hello"); //get: info del servidor -- URL es la comunicacion con el ordenador que se desea

//enviar mensaje
xhr.send();

