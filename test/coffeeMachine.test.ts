import Order from '../src/coffeeMachine';

describe('Order', () => {
  test('should return "C"', () => {
    expect(Order.orderCoffee()).toBe('C');
  });
});
