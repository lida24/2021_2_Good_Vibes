import { Connection } from '../../../../types';
import * as item from "./callbacks";

const connections: Connection[] = [
    {
        event: 'item click',
        callback: item.cardClick,
    },
];

export default connections;