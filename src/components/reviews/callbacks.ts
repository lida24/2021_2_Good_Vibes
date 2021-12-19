import bus from "../../modules/bus/bus";
import user from "../../services/user/user";
import CommentsContainer from '../productPage/commentsContainer/view';
import ReviewContainer from './reviewsContainer/view'
import { Callback, Order, Comment, myReview, Product } from "../../types";

export const reviewsListRequest: Callback = () => {
    bus.emit("reviews list request", user.username);
};

export const generateCommentsArray: Callback = (obj: { 'responseText': string }) => {
    // console.log('generate commenst array', array);

    const { responseText } = obj;
    Promise.resolve()
        .then(() => JSON.parse(responseText))
        .catch((err) => console.error(err))
        .then((parsedObj: Comment[]) => {
            if (parsedObj.length === 0) {

                return;
            }
            return parsedObj.forEach((comment) => {



                bus.emit('product info by id for reviews', comment)
            })
        });
};

export const renderCommentContainer: Callback = (myReview: myReview) => {

    //const commentContainer = new CommentsContainer(comment);
    const reviewContainer = new ReviewContainer(myReview)
    document.getElementsByClassName('comments-container')[0].appendChild(reviewContainer?.self);
};

export const showAvatar: Callback = () => {
    const photo = <HTMLImageElement>(
        document.getElementsByClassName("b2m5")[0]
    );
    photo.style.backgroundImage = `url(${user.avatar})`;
};
