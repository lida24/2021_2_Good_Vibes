import { Connection } from "../../types";
import * as reviews from "./callbacks"

const connections: Connection[] = [
    {
        event: "reviews shown",
        callback: reviews.reviewsListRequest,
    },
];

export default connections;
