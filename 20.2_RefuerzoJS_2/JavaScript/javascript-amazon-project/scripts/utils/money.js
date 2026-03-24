export function formatCurrency(priceCents){
   return (Math.round(priceCents) / 100).toFixed(2);
}

//export default formatCurrency;


function isWeekend(dato){
  const fecha = dato.format("dddd");
  return fecha === "Saturday" || fecha === "Sunday"
};

export default isWeekend; 