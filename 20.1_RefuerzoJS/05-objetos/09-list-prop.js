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


//Object Tambien tiene metodos
// ".keys()" ".entrices()"

//let keys = Object.keys(punto);
//es lo mismo
//console.log(Object.keys(punto));

for(let llave of Object.keys(punto)){
    console.log(llave, punto[llave]);
}


//par acceder a la propiedades de un objeto cuando no se conocen
for (let entry of Object.entries(punto)){
    console.log(entry);
}