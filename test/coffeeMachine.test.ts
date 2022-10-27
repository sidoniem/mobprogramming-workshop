import Order from '../src/coffeeMachine';

describe('Order', () => {
  test('should return "Hello Cookie Team" if you say hello to cookies', () => {
    expect(Order.sayHello).toBe('Hello Cookie Team');
  });
});
