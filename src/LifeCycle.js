import React from 'react';

class Music extends React.Component {
    render(){
        return(
            <div>
                <h1>Hello</h1>
                <Header/>
            </div>
        );
    }
}

class Header extends React.Component{
    render(){
        return(
            <div>
                <h1>Header Component</h1>
            </div>            
        );
    }
}

export default Music;

