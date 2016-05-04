import {browserHistory} from 'react-router';


/*
 * Use as onClick handler for buttons etc.
 */
const go = (href) => () => browserHistory.push(href);


export default go;
