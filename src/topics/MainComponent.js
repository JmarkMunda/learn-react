import React, { Component } from 'react';
import './styles.css'

class MainComponent extends Component {
    render() { 
        return (
            <div className='main-container'>
                <h1>Reasons I'm excited with react</h1>
                <ol>
                    <li>Cool</li>
                    <li>Popular</li>
                    <li>To get a job as a react developer</li>
                </ol>
            </div>
        );
    }
}
 
export default MainComponent;