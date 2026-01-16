

//estamos usando el detector de eventos ".on()" en HTML con jQuery
$("h1").on("mouseover", function() {  // estamos regitrado el evento con "mouseover" que es cada vez que pasemos sobre el h1
    $("h1").css("color", "red");  // Selecionamos el h1 para que cuando pasemos sobre el, cambie de color de letra a rojo 
});                         