import ReactDOM from 'react-dom';

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
 
