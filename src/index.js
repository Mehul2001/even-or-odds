import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './components/app';
import "./index.css";

const store = createStore();

console.log(store);

ReactDOM.render(<App />, document.getElementById('root'));
