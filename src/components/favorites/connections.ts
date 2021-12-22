import { Connection, Product } from '../../types';
import * as favorites from './callbacks';

const connections: Connection[] = [
    {
        event: 'favorite product array parsed',
        callback: [
            favorites.addProductArrayFavorite,
            favorites.fieldsFill,

        ]
    },
    {
        event: 'favorite shown',
        callback: favorites.showAvatar,
    }
];

export default connections;
