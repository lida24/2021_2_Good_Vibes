import { Connection } from '../../../types';
import * as newCommentContainer from './callbacks';

const connections: Connection[] = [
  {
    event: 'add comment button click',
    callback: newCommentContainer.addCommentRequest,
  },
];

export default connections;
