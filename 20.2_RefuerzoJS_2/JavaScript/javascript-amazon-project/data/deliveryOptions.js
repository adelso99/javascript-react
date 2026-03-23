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