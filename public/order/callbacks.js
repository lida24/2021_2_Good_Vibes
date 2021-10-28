export const showOrder = () => {
  eventBus.emit('showView', {
    name: 'Order'
  });
};