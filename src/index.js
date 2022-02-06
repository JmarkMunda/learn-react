import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Test from './test'
import reportWebVitals from './reportWebVitals';

function Test(){
    const time = (
        <div>
            <h1>Hello World</h1>
            <h2>Its {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(time, document.getElementById('root'));   
}
setInterval(Test, 1000);
 



// ReactDOM.render(
//   <React.StrictMode>
//     <Test />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
