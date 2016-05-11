import config from '../config';


export class StatusCodeError extends Error {}


const DEFAULT_OPTS = {
  credentials: 'same-origin',
};


function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new StatusCodeError(response.statusText);
  error.statusCode = response.status;
  error.response = response;

  throw error;
}


function makeApiUrl(apiPath) {
  return `${config.backend.baseUrl}${config.backend.apiPrefix}${apiPath}`;
}


function requestWithBody(method) {
  return (apiPath, body = {}, requestOpts = {}) => {
    const
      headers = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }),
      opts = Object.assign({}, DEFAULT_OPTS, {
        method,
        headers,
        body: JSON.stringify(body),
      }, requestOpts);

    return fetch(makeApiUrl(apiPath), opts)
      .then(checkStatus)
      .then(res => res.json())
  };
}


function requestWithoutBody(method) {
  return (apiPath, requestOpts) => {
    const
      headers = new Headers({'Accept': 'application/json'}),
      opts = Object.assign({}, DEFAULT_OPTS, {method, headers}, requestOpts);

    return fetch(makeApiUrl(apiPath), opts)
      .then(checkStatus)
      .then(res => res.json());
  };
}


export const get = requestWithoutBody('GET');
export const post = requestWithBody('POST');
export const put = requestWithBody('PUT');
export const patch = requestWithBody('PATCH');
export const del = requestWithoutBody('DELETE');
export default get;
