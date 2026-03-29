import {formatCurrency} from "../scripts/utils/money.js"


describe("Conjunto de pruebas: formatCurrency --Formato de Moneda--", () => {
    it("Conversion de Centavos a Dolares", () => {
    expect(formatCurrency(2095)).toEqual("20.95");
    });
});