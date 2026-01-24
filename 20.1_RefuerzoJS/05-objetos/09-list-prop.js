const punto ={
    x: 10,
    y: 15,
    dibujar: function(){ //metodo tambien puede ser "dibujar(){}"
        console.log("Dibujando...");
    }
};

//delete punto.dibujar;

//Verificar si el metodo existe
if ("dibujar" in punto){
    punto.dibujar();
}



//let keys = Object.keys(punto);
//es lo mismo
//console.log(Object.keys(punto));

for(let llave of Object.keys(punto)){
    console.log(llave, punto[llave]);
}
