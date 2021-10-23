export const cartResponse = (responseText) => {
  eventBus.emit('signin ajax request', responseText);
  };

  