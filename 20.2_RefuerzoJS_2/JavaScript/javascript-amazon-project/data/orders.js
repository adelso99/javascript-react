//para guardar los datos de backend
export const orders = JSON.parse(localStorage.getItem("orders")) || [];

export function addOrder(order){
  orders.unshift(order); //se agreaga la orden al principio del array
  saveToStorage();
}


function saveToStorage(){
  localStorage.setItem("ordes", JSON.stringify(orders));
}