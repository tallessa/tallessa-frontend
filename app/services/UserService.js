import config from '../config';

export function getCurrentUser() {
  return fetch(`${config.backend.url}/api/v1/user`).then(res => res.json());
}
