
import React from 'react';
import Header from './topics/header';
import Footer from './topics/footer'
import MainComponent from './topics/MainComponent';

class Test extends React.Component {
    render() { 
        return (
            <div>
                <Header />   
                <MainComponent />
                <Footer />
            </div>
        );
    }
}
 
export default Test;
