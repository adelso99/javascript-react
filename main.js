/* CALLBACKS */

function callback(eventDetail){
    console.log("Hey me estan pasando esto");
    console.log(eventDetail)

    console.log("Ahora puedo hacer lo que sea con el eventDetail....");
    return saludame
}

function imprimeDetail(eventDetail){
    console.log("Hey me estan pasando esto");
    console.log(eventDetail)

    console.log("Ahora puedo hacer lo que sea con el eventDetail....");
    
}

function saludame(eventDetail){
    console.log("Hola Mundo");
    
}

/* FUNCTION EVENT */
function anotherAddEventListener(typeOfEvent, callback){
    var eventThatHappend =  {
        eventType : "keypress",
        key: "p",
        durationOfKeyPress: 2        
    }
    var eventLoqueSea =  {
        eventType : "loqueSea"
    }

    if (eventThatHappend.eventType === typeOfEvent){
        callback(eventThatHappend)
    }if(eventLoqueSea.eventType === typeOfEvent){
        callback(eventLoqueSea)
    }

}
/* LLAMANDO FUNCION ENVENT */
anotherAddEventListener("keypress", callback);
anotherAddEventListener("keypress", callback());
anotherAddEventListener("click", imprimeDetail);
anotherAddEventListener("click", imprimeDetail());
anotherAddEventListener("loqueSea", saludame);
anotherAddEventListener("loqueSea", saludame());

