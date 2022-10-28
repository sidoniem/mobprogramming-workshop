import Order, { Drink } from "../src/coffeeMachine";

describe("Order", () => {
  test('should return "C"', () => {
    expect(Order.orderCoffee()).toBe("C");
  });

  test('should return "T"', () => {
    expect(Order.orderTea()).toBe("T");
  });

  test('should return "H"', () => {
    expect(Order.orderChocolate()).toBe("H");
  });

  test.each(Object.entries(Drink))(
    "should return %s",
    ([key, drink]: Drink) => {
      expect(Order.orderDrink(key)).toBe(drink);
    }
  );
});
