export const cartResponse = () => {
  eventBus.emit('showView', {
    name: 'Cart'
  });
};