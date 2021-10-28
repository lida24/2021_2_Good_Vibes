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

export const renderItemArray = (itemArray) => {
  if (!Array.isArray(itemArray)) {
    console.error('wrong itemArray');
    return;
  }

  itemArray.forEach((item) => {
    renderItemCart(item);
  });
};


export const cartpageLoaded = (responseText) => {
  console.log('cartpageLoaded');

  console.log(responseText);

  try {
    const itemArray = JSON.parse(responseText);
    renderItemArray(itemArray);

    eventBus.emit('showView', {
      name: 'Cart'
    });

  } catch {
    console.error();
  }

  // eventBus.emit('homepage ajax request');
};

export const cartpageResponse = (responseText) => {
  const itemArray = JSON.parse(responseText);
  renderItemArray(itemArray);
};