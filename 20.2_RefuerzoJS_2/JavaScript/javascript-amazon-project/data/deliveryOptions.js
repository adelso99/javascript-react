//Importacion de daysj
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";

export const deliveryOptions = [{
  id: "1",
  deliveryDays: 7,
  priceCents: 0
},
{
  id: "2",
  deliveryDays: 3,
  priceCents: 499
},
{
  id: "3",
  deliveryDays: 1,
  priceCents: 999
}];

//Funcion que busca el id del producto y su opcion de envio que eligio para despues sumar todos los envios y obtener el total de envios
export function getDeliveryOption(deliveryOptionId){
  let deliveryOption;

  deliveryOptions.forEach((option) => {
    if(option.id === deliveryOptionId){
      deliveryOption = option;
    }
  });

  return deliveryOption || deliveryOptions[0];
}



//Parte para calcular la fecha
//Funcion que decide si es sabado o domingo
function isWeekend(date) {
  const dayOfWeek = date.format('dddd');
  return dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday';
}


//Funcion para calcular la fecha
export function calculateDeliveryDate(deliveryOption){
    let remainingDays = deliveryOption.deliveryDays;
    let deliveryDate = dayjs();
  
    while (remainingDays > 0) {

      // sumar 1 día
      deliveryDate = deliveryDate.add(1, "days");
    
      // verificar si es fin de semana
      if (!isWeekend(deliveryDate)) {
        // si NO es fin de semana → restar 1 a remainingDays
        remainingDays--;
      }
    }

    
    const dateString = deliveryDate.format("dddd, MMMM D");


  return dateString;

}


export function validDeliveryOption(deliveryOptionId) {
  let found = false;

  deliveryOptions.forEach((option) => {
    if (option.id === deliveryOptionId) {
      found = true;
    }
  });

  return found;


}