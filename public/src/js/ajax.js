const AJAX_METHODS = {
    POST: 'POST',
    GET: 'GET',
};

export default class Ajax {
    static #ajax({ method = AJAX_METHODS.GET, url = '/', body = null, callback = () => { } }) {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.withCredentials = true;

        xhr.addEventListener('readystatechange', () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;

            callback(xhr.status, xhr.responseText);
        });

        if (body) {
            xhr.setRequestHeader('Content-type', 'application/json; charser=utf8');
            xhr.send(JSON.stringify(body));
            return;
        }

        xhr.send();
    }

    static promisifyGet(args = {}) {
        return new Promise((resolve, reject) => {
            this.#ajax({
                ...args,
                method: AJAX_METHODS.GET,
                callback: (status, responseText) => {
                    if (status < 300) {
                        resolve({
                            status,
                            responseText,
                        });
                        return;
                    }

                    reject({
                        status,
                        responseText,
                    })
                }
            });
        });
    }

    static promisifyPost(args = {}) {
        return new Promise((resolve, reject) => {
            this.#ajax({
                ...args,
                method: AJAX_METHODS.POST,
                callback: (status, responseText) => {
                    if (status < 300) {
                        resolve({
                            status,
                            responseText,
                        });
                        return;
                    }

                    reject({
                        status,
                        responseText,
                    })
                }
            });
        });
    }
}
