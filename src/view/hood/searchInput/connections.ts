import { Connection } from '../../../types';
import * as searchInput from './callbacks';

const connections: Connection[] = [
  {
    event: 'suggest request confirmed',
    callback: searchInput.showSuggests,
  },
];

export default connections;
