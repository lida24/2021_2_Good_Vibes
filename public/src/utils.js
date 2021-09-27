export const parseRequestUrl = () => {
    const url = document.location.hash.toLowerCase();
    const request = url.split('/');
    // console.log(request);
    return {
        // resource: request[1],
        // id: request[2],
        // action: request[3],

        resource: request[0],
        id: request[1],
        action: request[2],

        
    };
};