(function () {
  const AJAX_METHODS = {
    POST: 'POST',
    GET: 'GET',
  };

  class Ajax {
    ajaxGet(args) {
      return this.#ajax({ method: AJAX_METHODS.GET, ...args });
    }

    ajaxPost(args) {
      return this.#ajax({ method: AJAX_METHODS.POST, ...args });
    }

    #ajax({ method = AJAX_METHODS.GET, url = '/', body = null, callback = () => {} }) {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url, true);

      // xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST');
      // xhr.setRequestHeader('Access-Control-Allow-Origin', 'domain');
      // xhr.setRequestHeader('Access-Control-Allow-Credentials', 'true');

      // xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST');

      // // xhr.setRequestHeader('Access-Control-Allow-Origin', 'domain');

      // // xhr.setRequestHeader('Accept', 'text/plain');
      // xhr.setRequestHeader('Access-Control-Allow-Origin', 'https://ozonback.herokuapp.com/');
      // xhr.setRequestHeader('Access-Control-Allow-Credentials', 'true');
      
      // // xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST');
      
      // xhr.withCredentials = true;


// ------------------

      // xhr.setRequestHeader('Access-Control-Allow-Origin', 'https://ozonback.herokuapp.com/');
      // xhr.setRequestHeader('Access-Control-Allow-Headers', 'origin, x-requested-with, content-type');
      // xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET');
      // xhr.setRequestHeader('Access-Control-Allow-Credentials', 'true');
      // xhr.setRequestHeader('Accept', 'text/html');

      // xhr.withCredentials = true;

// ------------------

      // xhr.setRequestHeader('Content-type', 'text/plain');
      // xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST');
      // xhr.setRequestHeader('Origin', 'https://ozonback.herokuapp.com/');



      xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;

        callback(xhr.status, xhr.responseText);
      });

      if (body) {
        xhr.setRequestHeader('Content-type', 'application/json; charser=utf8');
      //  xhr.setRequestHeader('Content-type', 'text/html; charser=utf8');

        xhr.send(JSON.stringify(body));
        return;
      }

      xhr.send();
    }
  }
  window.Ajax = new Ajax();

}()
);