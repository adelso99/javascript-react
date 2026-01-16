

//estamos etableciendo un detector de evento de pulsaciones o teclado de elementos del HTML con jQuery
$("input").keydown(function(event) {  // estamos regitrado cada vez que se preciona el teclado dentro del "input"
    console.log(event.key);  // la funcion anonima nos pasara el event que sera el evento o la tecla que esta siendo presionada
});                          // el ".key" es la palabra recebervada del evento para que solo nos devuelva la letra del teclado presionado