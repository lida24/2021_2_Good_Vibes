import eventBus from '../scripts/eventBus.js';
export const showOrder = () => {
  eventBus.emit('showView', {
    name: 'Order'
  });
};
