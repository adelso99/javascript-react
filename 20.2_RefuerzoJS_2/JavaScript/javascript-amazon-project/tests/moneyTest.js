import {formatCurrency} from "../scripts/utils/money.js"

console.log("Conjunto de pruebas: formatCurrency --Formato de Moneda--");

console.log("Conversion de Centavos a Dolares");
if(formatCurrency(2095) === "20.95"){
  console.log("Passed");
}else{
  console.log("Failed");
}

console.log("Funciona con 0");
if(formatCurrency(0) === "0.00"){
  console.log("Passed");
}else{
  console.log("Failed");
}

console.log("Redondea al centavo más cercano");
if(formatCurrency(2000.5) === "20.01"){
  console.log("Passed");
}else{
  console.log("Failed");
}