//Practica para comunicacion entre front-ent y back-end con HTTP

//creacion de msj http con el uso de la clase "XMLHttpRequest"
const xhr = new XMLHttpRequest();

//confuracion de msj
//se debe de configurar 2 parametros: P1. define el tipo de menaje http se envia y el P2. indica a la compu donde enviar ese mensaje http
xhr.open("get", "https://supersimplebackend.dev"); //get: info del servidor -- URL es la comunicacion con el ordenador que se desea

//enviar mensaje
xhr.send();
