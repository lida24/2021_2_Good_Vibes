import bus from '../../init/bus';
import user from '../../object/user/user';
import { Callback, Order } from '../../types';
import Element_Order from './order/view';
import OrderItem from './item/view';

export const ordersListRequest: Callback = () => {
  bus.emit('orders list request', undefined);
};

export const parseResponse: Callback = (obj: { 'responseText': string }) => {
  const { responseText } = obj;
  Promise.resolve()
    .then(() => JSON.parse(responseText))
    .then((parsedObj: Order[]) => bus.emit('show orders list', parsedObj))
    .catch((err) => console.error(err));
};

export const showOrderList: Callback = (obj: Order[]) => {
  // console.log(obj);

  const table = <HTMLElement>document.getElementsByClassName('orders__table_body')[0];
  table.textContent = '';

  const array = obj.sort((a, b) => b.order_id - a.order_id);

  array.forEach((elem) => {

    // bus.emit('product array request', )

    // eslint-disable-next-line no-param-reassign
    elem.date = new Date(elem.date).toLocaleString();

    const orderView = new Element_Order(elem);
    elem.products.sort((a, b) => a.id - b.id);
    // elem.products.forEach((item) => {
    //   const itemView = new OrderItem(item);
    //   orderView.self.appendChild(itemView.self);
    // });

    table.appendChild(orderView.self);
  });
};

// export const showOrderList: Callback = (obj: Order[]) => {
//   const oldTbody = <HTMLTableRowElement>document.getElementsByClassName('table-body')[0];
//   if (oldTbody) {
//     oldTbody.remove();
//   }

//   const tbody = <HTMLTableSectionElement>document.createElement('tbody');
//   tbody.className = 'table-body';

//   obj.forEach((item) => {
//     const tr = <HTMLTableRowElement>document.createElement('tr');

//     const orderIdCell = <HTMLTableCellElement>document.createElement('td');
//     orderIdCell.textContent = item.order_id.toString();
//     tr.appendChild(orderIdCell);

//     const dateCell = <HTMLTableCellElement>document.createElement('td');
//     const date = new Date(item.date);
//     // console.log(a.toLocaleDateString(), a.toLocaleTimeString());
//     dateCell.textContent = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;

//     tr.appendChild(dateCell);

//     const costCell = <HTMLTableCellElement>document.createElement('td');
//     costCell.textContent = item.cost.toString();
//     tr.appendChild(costCell);

//     const payStatusCell = <HTMLTableCellElement>document.createElement('td');
//     payStatusCell.textContent = '[тут пока пусто]';
//     tr.appendChild(payStatusCell);

//     const deliveryStatusCell = <HTMLTableCellElement>document.createElement('td');
//     deliveryStatusCell.textContent = item.status;
//     tr.appendChild(deliveryStatusCell);

//     const detalesCell = <HTMLTableCellElement>document.createElement('td');
//     detalesCell.innerHTML = '<a href="/#/order/"> Детали </a>';
//     tr.appendChild(detalesCell);

//     tbody.appendChild(tr);
//   });

//   const table = <HTMLTableElement>document.getElementsByClassName('table')[0];
//   table.appendChild(tbody);
// };

export const profileStateRequest: Callback = () => {
  // console.log('asdfa');
  bus.emit('profile state request', undefined);
};
