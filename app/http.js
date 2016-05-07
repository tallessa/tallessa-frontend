const DEFAULT_OPTS = {
  apiPrefix: '/api/v1'
};

export default (clientOpts) => {
  const opts = Object.assign(DEFAULT_OPTS, clientOpts);
  const requestInterceptors = [];
  const responseInterceptors = [];

  function createRequest(requestOpts) {
    // By default fetch() doesn't send cookies
    return requestInterceptors.reduce((acc, fn) => fn(acc), Object.assign({credentials: 'same-origin'}, requestOpts));
  }

  function processResponse(response) {
    return responseInterceptors.reduce((acc, fn) => fn(acc), response).json();
  }

  function isOk(response) {
    return response.status >= 200 && response.status < 300;
  }

  function checkStatus(response) {
    if (isOk(response)) {
      return response;
    }
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }

  function api(input) {
    return opts.apiPrefix + input;
  }

  function requestWithBody(method) {
    return (input, body = {}, requestOpts = {}) => {
      const headers = new Headers({
        'Content-Type': 'application/json'
      });

      const request = createRequest({
        method,
        headers,
        body: JSON.stringify(body),
        ...requestOpts
      });

      return fetch(api(input), request)
        .then(checkStatus)
        .then(processResponse);
    };
  }

  return {
    get: (input, init) => {
      const request = createRequest({...init, method: 'GET'});
      return fetch(api(input), request)
        .then(checkStatus)
        .then(processResponse);
    },

    post: requestWithBody('POST'),

    put: requestWithBody('PUT'),

    del: (input, init) => {
      const request = createRequest({...init, method: 'DELETE'});
      return fetch(api(input), request)
        .then(checkStatus)
        .then(res => res.json());
    },

    addRequestInterceptor: (fn) => {
      requestInterceptors.push(fn);
    },

    addResponseInterceptor: (fn) => {
      responseInterceptors.push(fn);
    }
  };
};
