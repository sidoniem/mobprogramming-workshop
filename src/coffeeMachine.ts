export enum Drink {
  COFFEE = "C",
  CHOCOLATE = "H",
  TEA = "T",
}

const Order = {
  orderCoffee: () => "C",
  orderTea: () => "T",
  orderChocolate: () => "H",
  orderDrink: (drink: string): string => Drink[drink],
};

export default Order;
