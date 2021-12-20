/* import { Connection } from '../../types';
import * as orders from "./callbacks";

const connections: Connection[] = [
    {
        event: "orders shown",
        callback: [
            orders.ordersListRequest,
            orders.showAvatar,
        ]
    },
    {
        event: "orders list confirmed",
        callback: orders.parseResponse,
       /*  callback: orders.generateOrdersArray, 
    },
    {
        event: "show orders list",
        callback: [
            orders.showOrderList,
        ]
    },
];

export default connections; */

import { Connection } from '../../types';
import * as orders from "./callbacks";

const connections: Connection[] = [
    {
        event: "orders shown",
        callback: [
            orders.cleanOrderContainer,  // исключительно из-за того, что долго грузится история заказов
            orders.ordersListRequest,
            orders.showAvatar,
        ],
    },
    {
        event: "orders list confirmed",
        callback: orders.parseResponse,
    },
    {
        event: "show orders list",
        callback: orders.showOrderList,
    },
];

export default connections;