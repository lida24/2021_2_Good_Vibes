import * as itemCart from './callbacks.js';

const itemCartListeners = [
    {
        event: 'change qty select',
        callback: [
            itemCart.changeQtySelect
        ]
      },
];

export default itemCartListeners;
