/* eslint-disable import/extensions */
import eventBus from '../scripts/eventBus.js';

const ItemCartEvents = ({ element, context }) => {
  const deleteBtn = element.getElementsByClassName(`delete-button-${context.id}`)[0];

  deleteBtn.addEventListener('click', (event) => {
    event.preventDefault();

    eventBus.emit('delete button click', context.id);
  });

  const qtySelects = document.getElementsByClassName('qty-select');
    Array.from(qtySelects).forEach((qtySelect) => {
      qtySelect.addEventListener('change', (event) => {
         event.preventDefault();

         eventBus.emit('change qty select', qtySelect, event);
      });
    });
};

export default ItemCartEvents;
