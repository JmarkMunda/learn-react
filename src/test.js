
import React from 'react';

class Test extends React.Component {
    render() { 
        return (
            <div>
                <header>
                    <nav>
                        <img src='./assets/reactlogo.png' style={{width: 500}} />
                    </nav>
                </header>
                <h1>Reasons I'm excited with react</h1>
                    <ol>
                        <li>Cool</li>
                        <li>Popular</li>
                        <li>To get a job as a react developer</li>
                    </ol>
                <footer>c 2022 Munda development. All rights reserved.</footer>
            </div>
        );
    }
}
 
export default Test;
