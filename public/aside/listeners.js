import * as aside from './callbacks.js';

const asideListeners = [
    {
        event: 'hide aside',
        callback:  aside.hideAside,
    },
    {
        event: 'show aside',
        callback:  aside.showAside,
    },
    {
        event: 'show subcategory',
        callback: aside.showSubCategory
    }
]

export default asideListeners;