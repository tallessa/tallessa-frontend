import React from 'react';


const config = {
  appName: <span>Tallessa<sup style={{fontSize: '40%'}}>BETA</sup></span>,
  backend: {
    url: process.env.TALLESSA_BACKEND_URL || '',
  },
};


export default config;
