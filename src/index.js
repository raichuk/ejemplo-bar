import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

const mongoDb = require('./dbs/mongo');

const mongoDbPort = 27017;
const url = `mongodb://localhost:${mongoDbPort}/tres-bares`;


async function main() {
  await mongoDb.connect(url);
  console.log('Conectado a mongoDB');

  ReactDOM.render(<App />, document.getElementById('root'));
  registerServiceWorker();
}

main();
