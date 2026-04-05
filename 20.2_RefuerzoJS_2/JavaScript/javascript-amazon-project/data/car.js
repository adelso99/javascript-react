
//Ejericios
/*
17a. Practiquemos la POO creando una clase que represente un coche.
  - Crea un nuevo archivo data/car.js y crea una clase Car {}
  - Dale a la clase Car 2 propiedades: marca y modelo. Luego, crea un constructor que establezca estas 2 propiedades.
  - Mantén todas las propiedades públicas por ahora (aprenderemos por qué en un ejercicio posterior).
  - Usa esta clase para generar algunos objetos de coche:
    { marca: 'Toyota', modelo: 'Corolla' }
    { marca: 'Tesla', modelo: 'Modelo 3' }

  - muestra los objetos de coche en la consola.
  - En checkout.js, carga data/car.js usando la sintaxis import '...'; y revisa la consola


  17b. Agrega un método displayInfo() que muestre en la consola `${brand} ${model}`. Ejecuta displayInfo() para cada auto y verifica la consola.

*/

class Car{
  marca;
  modelo;

  constructor(carDetalle){
    this.marca = carDetalle.marca;
    this.modelo = carDetalle.modelo;
  }

  //metod agregado
  displayInfo(){
    return `${this.marca} ${this.modelo}`;
  }
}

const carro1 = new Car({
  marca: "Toyota", 
  modelo: "Corolla"
});

const carro2 = new Car({
  marca: "Tesla", 
  modelo: "Modelo 3"
});

console.log(carro1);
console.log(carro2);

console.log(carro1.displayInfo());
console.log(carro2.displayInfo());