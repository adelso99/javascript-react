import {formatCurrency} from "../scripts/utils/money.js"


describe("Conjunto de pruebas: formatCurrency --Formato de Moneda--", () => {

    //Prueba 1
    it("Conversion de Centavos a Dolares", () => {
      expect(formatCurrency(2095)).toEqual("20.95");
    });

    //Prueba 2
    it("Funciona con 0", () => {
      expect(formatCurrency(0)).toEqual("0.00");
    });

    //Prueba 3
    it("Redondea al centavo mas cercano", () => {
      expect(formatCurrency(2000.5)).toEqual("20.01");
    });
});