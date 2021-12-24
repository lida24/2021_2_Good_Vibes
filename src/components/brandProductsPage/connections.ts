import { Connection, Product } from '../../types';
import * as brandProducts from './callbacks';

const connections: Connection[] = [
    {
        event: 'brands products array parsed',
        callback: brandProducts.addProductArrayBrand,
    },
    {
        event: 'brandsProductPage shown',
        callback: brandProducts.changeName,
    },
];

export default connections;
