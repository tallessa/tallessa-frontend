import config from '../config';


export function getStuff() {
    return fetch(`${config.backend.url}/api/v1/stuff`).then(res => res.json());
}
