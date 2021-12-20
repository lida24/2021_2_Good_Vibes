/* import bus from "../../modules/bus/bus";
import { Callback, Order, myOrder } from "../../types";
import { Product } from "../../types";
import ProductCatdList from '../productCard/list';
import user from "../../services/user/user";

const orderMap: {
  [orderid: number]: {
    'productId': number,
  }
} = {};

export const ordersListRequest: Callback = () => {
    bus.emit("orders list request", undefined);
};

export const parseResponse: Callback = (obj: { responseText: string }) => {
    const { responseText } = obj;
    Promise.resolve()
      .then(() => JSON.parse(responseText))
      .then((parsedObj: Order[]) => bus.emit("show orders list", parsedObj))
      .catch((err) => console.error(err));
};

/* export const showOrderList: Callback = (obj: Order[]) => {
    const oldTbody = <HTMLTableRowElement>(
      document.getElementsByClassName("table-body")[0]
    );
    if (oldTbody) {
      oldTbody.remove();
    }

    const tbody = <HTMLTableSectionElement>document.createElement("tbody");
    tbody.className = "table-body";
    obj?.forEach((item) => {
      const tr = <HTMLTableRowElement>document.createElement("tr");

      const dateCell = document.getElementsByClassName("d2t1")[0];
      const date = new Date(item.date);
      // console.log(a.toLocaleDateString(), a.toLocaleTimeString());
      dateCell.textContent = 'Заказ от: ' + `${date.toLocaleDateString()}`;
  
      const orderIdCell = document.getElementsByClassName("d2t5")[0];
      orderIdCell.textContent = item.order_id.toString();
      /* tr.appendChild(orderIdCell); 
      const orderStatusCell = document.getElementsByClassName("c6w0")[0];
      orderStatusCell.textContent = item.status.toString();
  
      const costCell = <HTMLTableCellElement>document.createElement("td");
      costCell.textContent = item.cost.toString();
      tr.appendChild(costCell);
  
      /* const payStatusCell = <HTMLTableCellElement>document.createElement('td');
      payStatusCell.textContent = '[тут пока пусто]';
      tr.appendChild(payStatusCell); */

/*    const deliveryStatusCell = <HTMLTableCellElement>document.createElement('td');
      deliveryStatusCell.textContent = item.status;
      tr.appendChild(deliveryStatusCell); 
  
      const dateDeliveryCell = document.getElementsByClassName("d2a7")[0];
      const dateDelivery = new Date(item.date);
      // console.log(a.toLocaleDateString(), a.toLocaleTimeString());
      dateDeliveryCell.textContent = 'Дата доставки: ' + `${dateDelivery.toLocaleDateString()} ${dateDelivery.toLocaleTimeString()}`;
      /* tr.appendChild(dateCell); */

/*  const productsCell = <HTMLTableCellElement>document.createElement("td");
      
      item.products.forEach((product) => {
        productsCell.textContent = product.image;
        console.log(product.image);
      });

      tr.appendChild(productsCell); */

/*  const detalesCell = <HTMLTableCellElement>document.createElement('td');
      detalesCell.innerHTML = '<a href="/#/order/"> Детали </a>';
      tr.appendChild(detalesCell);
    
  
      tbody.appendChild(tr);
    });
  
    const table = <HTMLTableElement>(
      document.getElementsByClassName("my_account_orders")[0]
    );
    table.appendChild(tbody);
  }; 
  
  export const showAvatar: Callback = () => {
    const photo = <HTMLImageElement>(
      document.getElementsByClassName("b2m5")[0]
    );
    photo.style.backgroundImage = `url(${user.avatar})`;
  };

  export const generateOrdersArray: Callback = (obj: { 'responseText': string }) => {
    // console.log('generate commenst array', array);
    console.log('asdf');
    const { responseText } = obj;
    Promise.resolve()
        .then(() => JSON.parse(responseText))
        .catch((err) => console.error(err))
        .then((parsedObj: Order[]) => {
            if (parsedObj.length === 0) {

                return;
            }
            return parsedObj.forEach((order) => {



                bus.emit('show orders list', order)
            })
        });
};

 */

import bus from "../../modules/bus/bus";
import user from "../../services/user/user";
import { Callback, Order } from "../../types";
import OrdersContainer from './ordersContainer/view';

export const ordersListRequest: Callback = () => {
  bus.emit("orders list request", undefined);
};

export const cleanOrderContainer: Callback = () => {
  const orderBox = <HTMLElement>document.getElementsByClassName('orders-list')[0];
  orderBox.textContent = '';
};

export const parseResponse: Callback = (obj: { responseText: string }) => {
  console.log("asdf");
  const { responseText } = obj;
  Promise.resolve()
    .then(() => JSON.parse(responseText))
    .then((parsedObj: Order[]) => bus.emit("show orders list", parsedObj))
    .catch((err) => console.error(err));
};

const viewList: { [id: number]: OrdersContainer } = {};

export const showOrderList: Callback = (obj: Order[]) => {
  console.log("show order list");

  const orderBox = <HTMLElement>document.getElementsByClassName('orders-list')[0];
  // const orderBox = <HTMLElement>document.getElementsByClassName('orders-box')[0];

  const objKeys = obj.map(order => order.order_id);
  Object.keys(viewList).forEach((key) => {
    if (!objKeys.includes(+key)) {
      delete viewList[key];
    }
  })

  obj.forEach((order) => {

    const target = viewList[order.order_id];
    if (target) {
      target.setContext(order);
      target.render();

      return true;
    }

    const orderContainer = new OrdersContainer(order);
    viewList[order.order_id] = orderContainer;

    orderBox.appendChild(orderContainer.self);
  })

  debugger;
};


export const showAvatar: Callback = () => {
  const photo = <HTMLImageElement>(
    document.getElementsByClassName("b2m5")[0]
  );
  photo.style.backgroundImage = `url(${user.avatar})`;
};