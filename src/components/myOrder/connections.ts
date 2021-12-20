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
        callback: orders.ordersListRequest,
    },
    {
        event: "orders list confirmed",
        callback: orders.parseResponse,
    },
    /* {
        event: "show orders list",
        callback: orders.showOrderList,
    }, */
    {
        event: "details button click",
        callback: orders.controlDetails,
    },
];

export default connections;