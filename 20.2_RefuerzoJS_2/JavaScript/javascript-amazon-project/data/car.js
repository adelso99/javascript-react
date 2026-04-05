
//Ejericios

class Car{
  marca;
  modelo;
  velocidad = 0;
  isTrunkopen = false;

  constructor(carDetalle){
    this.marca = carDetalle.marca;
    this.modelo = carDetalle.modelo;
  }

  //metod agregado
  displayInfo(){
    const maletero = this.isTrunkOpen ? 'Abierto' : 'Cerrado';
    console.log(`${this.marca} ${this.modelo}`);
    console.log(`${this.marca} ${this.modelo}, Velocidad: ${this.velocidad} km/h, Maletero: ${maletero}`);
  }

  //metodos de velocidades
  go(){
    if(this.velocidad < 200){
        if (!this.isTrunkopen) {
          this.velocidad += 5;
        }else {
          console.log("No puedes avanzar con el maletero abierto");
        }

      //limite maximo de velocidad
      if (this.velocidad > 200) {
        this.velocidad = 200;
      }
    }
  }

  brake(){
     this.velocidad -= 5;

     //limite minimo de velocidad
     if (this.velocidad < 0) {
      this.velocidad = 0;
    }
  }


  //metodos del maletero.
  openTrunk(){
    if(this.velocidad === 0){
      this.isTrunkopen = true;
    }

  }

  closeTrunk(){
    if(this.isTrunkopen === true){
      this.isTrunkopen = false;
    }

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

carro1.displayInfo();
carro2.displayInfo();

carro1.go();
carro2.go();

carro1.go();
carro2.go();

carro1.brake();
carro2.brake();

carro1.openTrunk();
carro1.go();


carro2.openTrunk();
carro2.go();
carro2.go();

carro1.displayInfo();
carro2.displayInfo();


/*
17e. Crea una nueva clase Racecar que extienda Car.
   - Los autos de carreras van más rápido que los autos normales, por lo que Racecar tiene una propiedad adicional llamada acceleration. Al usar go(), aumenta la velocidad en acceleration en lugar de 5, y actualiza la velocidad máxima a 300.
   - Los autos de carreras no tienen maletero. Actualiza openTrunk() y closeTrunk().
   - Crea un auto de carreras { marca: 'McLaren', modelo: 'F1', aceleración: 20 } y prueba el código

*/

class RaceCar extends Car{
  sizeChartLink;

  //uso de contructor para establecer el valor --uso de "super" para llamar al constructor PADRE de la clase anterior
  constructor(productDetails) {
    super(productDetails);
    this.sizeChartLink = productDetails.sizeChartLink;
  }

  //sera el metodo para cargar la imagen de tallas a los productos que sea necesarios
  extraInfoHTML(){
    return `
    <a href="${this.sizeChartLink}" target="_blank">
    Size Chart
    </a>
    `;
  }
}