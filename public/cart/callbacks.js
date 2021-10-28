import eventBus from '../scripts/eventBus.js';
import ItemCart from '../itemCart/view.js';

export const showOrder = () => {
  eventBus.emit('showView', {
    name: 'Order'
  });
};

export const renderItemCart = (itemData) => {
  if (itemList[itemData.id]) {
    return;
  }

  const root = document.getElementsByClassName('content cart')[0];
  const itemCart = document.createElement('div');
  itemCart.className = 'content cart';
  const itemObj = new ItemCart(itemCart);

  add({
    [itemData.id]: {
      element: itemCart,
      object: itemObj,
      state: state.hidden
    }
  });

  itemObj.setContext(itemData);
  itemList[itemData.id].state = state.visible;
  root.appendChild(itemCart);

  prodObj.render()
    .catch((error) => console.error(error));
};