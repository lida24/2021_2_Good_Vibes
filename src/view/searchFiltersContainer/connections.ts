import { Connection } from '../../types';
import * as searchFiltersContainer from './callbacks';

const connections: Connection[] = [
  {
    event: 'fill search filters inputs',
    callback: searchFiltersContainer.fillInputs,
  },
];

export default connections;
