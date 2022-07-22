import React from 'react'; // View library (Core Package)
import ReactDOM from 'react-dom/client';  // Used to access the browser DOM.
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'tachyons'; // Import the tachyons package.


const root = ReactDOM.createRoot(document.getElementById('root')); // Get the Root Element ID in index.html

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
