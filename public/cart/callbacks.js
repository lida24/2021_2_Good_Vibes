export const cartResponse = (responseText) => {
  eventBus.emit('cart ajax request', responseText);
  };