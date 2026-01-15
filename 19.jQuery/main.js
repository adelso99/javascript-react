

//Forma 1: Normal el script de jQuery al final del body antes que este archivo js
$("h1").css("color", "red");


/*
Forma 2: el script de jQuery en el head, donde tambien esta el link de css:
$(document).ready(function() {
    $("h1").css("color", "red");
});*/



