import React from 'react';


const defaultAppName = <span>Tallessa<sup style={{fontSize: '40%'}}>BETA</sup></span>;


// TODO process.env probably not available in browser?
const config = {
  app: {
    name: process.env.TALLESSA_APP_NAME || defaultAppName,
    url: process.env.TALLESSA_APP_URL || 'https://tallessa.eu',
  },
  backend: {
    baseUrl: process.env.TALLESSA_BACKEND_URL || '',
    apiPrefix: '/api/v1',
  },
};


export default config;
