import {calculateShipping, calculateTotal} from "../../scripts/checkout/paymentSummary";

//Testing Opcional
describe("Conjunto de Pruebas: paymentSummary", () => {

  it('Debe calcular correctamente el envío', () => {
    const cart = [
      { price: 10, quantity: 2, shippingCost: 5 },
      { price: 20, quantity: 1, shippingCost: 10 }
    ];

    const shipping = calculateShipping(cart);
    expect(shipping).toEqual(15); // 5 + 10
  });

  it('Debe calcular correctamente el total del carrito', () => {
    const cart = [
      { price: 10, quantity: 2, shippingCost: 5 },
      { price: 20, quantity: 1, shippingCost: 10 }
    ];

    const total = calculateTotal(cart);
    expect(total).toEqual(45); // (10*2+5) + (20*1+10)
  });

});