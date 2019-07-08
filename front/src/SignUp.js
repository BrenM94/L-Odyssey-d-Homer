import React, { Component } from 'react';

class SignUp extends Component {
    constructor(props){
    super(props);
        this.state = {
            mail: ""
        };
        this.handleChange = this.handleChange.bind(this);
        
    };

    handleChange(event) {
        this.setState({mail: event.target.value});
    }

    render() {
        return (
            <div className="box">
                
                <h1>Sign up here {this.state.mail}</h1>
                    <input 
                        type="text" 
                        name="mail" 
                        onChange={this.handleChange}
                    />
            </div>
        );
    }
}

export default SignUp;