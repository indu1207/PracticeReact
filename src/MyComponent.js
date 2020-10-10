
import React from 'react';
import './MyComponent.css';
import Alert from 'react-bootstrap/Alert';

class Mycomponent extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'Indu',
            id: 107
        }
        
    }
    
    render() {

        setTimeout(() => { this.setState({ name: 'raghu', id: '111' }) }, 2000)
        return (
            <div>
                <h1>Hello Name Is: {this.state.name}</h1>
                <h1>Your Id is: {this.state.id}</h1>
                <div class="row">
                    <div class="column">
                        <a href="logo"><img src="https://retailimages.s3.amazonaws.com/20200919_181502.jpg" /></a>
                        <h5>This product cost is 10000</h5>
                     </div>   
                    <div class="column">
                        <img src="https://retailimages.s3.amazonaws.com/pipe-necklace-unusual-one-gram-gold-temple-jewellery-jewelsmart-22654.jpg" />
                        <h5>This product cost is 50000</h5>
                    </div>   
                    <div class="column">
                        <img src="https://retailimages.s3.amazonaws.com/3-line-kharbuja-long-necklace-antique-gold-fashion-jewellery-jewelsmart-22661.jpg"/>
                        <h5>This product cost is 2000</h5>
                    </div> 
                    <div class="column">
                        <img src="https://retailimages.s3.amazonaws.com/20200919_181502.jpg" />
                        <h5>This product cost is 3000</h5>
                    </div> 
                    <div class="column">
                        <img src="https://retailimages.s3.amazonaws.com/pipe-necklace-unusual-one-gram-gold-temple-jewellery-jewelsmart-22654.jpg" />
                    </div>    
                </div>
            </div>
            
        );
    }
}


export default Mycomponent;