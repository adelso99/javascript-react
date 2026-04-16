//para guardar los datos de backend
export const orders = [];

function addOrder(order){
  orders.unshift(order); //se agreaga la orden al principio del array
}