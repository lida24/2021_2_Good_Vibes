import { Connection } from "../../types";
import { generateCommentsArray } from "../productPage/callbacks";
import * as reviews from "./callbacks"

const connections: Connection[] = [
    {
        event: "reviews shown",
        callback: reviews.reviewsListRequest,
    },
    {
        event: "reviews request confirmed",
        callback: reviews.generateCommentsArray,
    },
];

export default connections;
