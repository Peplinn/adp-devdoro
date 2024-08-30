import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import SignUp from './SIgn Up pages/SignUp';
// import SignIn from './SIgn Up pages/SignIn';
import App from './App';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <SignUp /> */}
    <App />
    {/* <SignIn /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
