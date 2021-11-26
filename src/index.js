import React, { useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import firebase from '../src/components/utils/firebase'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


