import cart from '../objects/cart.js';
import eventBus from '../scripts/eventBus.js';

export const changeQtySelect = () => {
    const item = cart.get().find((x) => x.id === qtySelect.id);
    cart.add({ id, number });
    eventBus.emit('calculate subtotal');
};