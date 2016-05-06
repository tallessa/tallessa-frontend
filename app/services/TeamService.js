import config from '../config';

export function getCurrentTeam() {
  return fetch(`${config.backend.url}/api/v1/team`).then(res => res.json());
}
