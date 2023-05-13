import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ProviderLayer from './ProviderLayer';
import { FirebaseAppProvider } from 'reactfire';

const FIREBASE_API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;
const FIREBASE_AUTH_DOMAIN = process.env.REACT_APP_FIREBASE_AUTH_DOMAIN;
const FIREBASE_PROJECT_ID = process.env.REACT_APP_FIREBASE_PROJECT_ID;
const FIREBASE_STORAGE_BUCKET = process.env.REACT_APP_FIREBASE_STORAGE_BUCKET;
const FIREBASE_MESSAGE_ID = process.env.REACT_APP_FIREBASE_MESSAGE_ID;
const FIREBASE_APP_ID = process.env.REACT_APP_FIREBASE_APP_ID;
const FIREBASE_DB_URL = process.env.REACT_APP_FIREBASE_DB_URL;


// const firebaseConfig = {
//   apiKey: FIREBASE_API_KEY,
//   authDomain: FIREBASE_AUTH_DOMAIN,
//   projectId: FIREBASE_PROJECT_ID,
//   storageBucket: FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: FIREBASE_MESSAGE_ID,
//   appId: FIREBASE_APP_ID,
//   databaseURL: FIREBASE_DB_URL,
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyCyYgE2b9LT_AZ1apVqJyoWBcLjEb2RrUo",
//   authDomain: "commerce-feee7.firebaseapp.com",
//   databaseURL: "https://commerce-feee7-default-rtdb.firebaseio.com",
//   projectId: "commerce-feee7",
//   storageBucket: "commerce-feee7.appspot.com",
//   messagingSenderId: "1096573613374",
//   appId: "1:1096573613374:web:92bf829b32da5a4cae286f"
// };

const firebaseConfig = {
  apiKey: "AIzaSyAiuSuEsfqPcO2gQt-LElvTvDd9w4mrMSo",
  authDomain: "crochet-project-c4c98.firebaseapp.com",
  projectId: "crochet-project-c4c98",
  storageBucket: "crochet-project-c4c98.appspot.com",
  messagingSenderId: "636807654385",
  appId: "1:636807654385:web:2afc8faea5e5b1fca6b250",
  measurementId: "G-F0ZPLHV5CV"
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FirebaseAppProvider  firebaseConfig={firebaseConfig}>
        <ProviderLayer />
      </FirebaseAppProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
