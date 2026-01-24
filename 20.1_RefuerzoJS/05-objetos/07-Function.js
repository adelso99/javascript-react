function Punto(x,y){
    this.x = x;
    this.y = y;

    this.dibujar = function(){
        console.log("Dibujando....");
    }
}

//para poder guardar el objeto se crea esta varible y se le asigna
//valores random solo para despues ser sustiuidas por el objeto de la funcion
//para poder extender objetos y funciones
let punto = { z: 7};

//el metodo ".call()"
//Punto.call(punto, 1, 2);//el "punto" que estan dentro del parentesis seria "this"

//tambien esta el metodo ".apply()"
Punto.apply(punto, [1, 2]);//pero los parametros se deben de pasar en array []

//ahora si dejara mostrarlo en consola
console.log(punto);




/* NO USAR
const Point = new Function("x", "y", `
    this.x = x;
    this.y = y;

    this.dibujar = function(){
        console.log("Dibujando....");
    }
    `);

const p = new Point(1, 2);

console.log(p);

*/