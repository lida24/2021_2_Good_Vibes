import { Connection } from '../../../types';
import * as searchInput from './callbacks';

const connections: Connection[] = [
  {
    event: 'suggest request confirmed',
    callback: searchInput.showSuggests,
  },
  {
    event: 'delete suggests list',
    callback: searchInput.deleteSuggests,
  },
];

export default connections;
