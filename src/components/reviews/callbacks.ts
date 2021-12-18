import bus from "../../modules/bus/bus";
import user from "../../services/user/user";
import CommentsContainer from '../productPage/commentsContainer/view';

import { Callback, Order, Comment } from "../../types";

export const reviewsListRequest: Callback = () => {
    bus.emit("reviews list request", user.username);
};

export const generateCommentsArray: Callback = (obj: { 'responseText': string }) => {
    // console.log('generate commenst array', array);
  
    const { responseText } = obj;
    debugger;
    Promise.resolve()
      .then(() => JSON.parse(responseText))
      .catch((err) => console.error(err))
      .then((parsedObj: Comment[]) => parsedObj.forEach((comment) => {
        renderCommentContainer(comment);
      }));
  };

export const renderCommentContainer: Callback = (comment: Comment) => {
    // console.log('render single comment block', comment);
    debugger;
    const commentContainer = new CommentsContainer(comment);
    document.getElementsByClassName('comments-container')[0].appendChild(commentContainer?.self);
    debugger;
};
  