import React, {Component} from 'react';
import { BrowserRouter as Router, Route, hashHistory, Link } from "react-router-dom";

class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {username_val: '', password_val: ''};

        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeUsername(event) {
        this.setState({username_val: event.target.value});
    }

    handleChangePassword(event) {
        this.setState({password_val: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault(); // need to do this so page won't reload
        this.props.signUp(this.state.username_val, this.state.password_val);
        this.setState({username_val: '', password_val: ''});
    }

    render() {
    return (
        <div>
            <h3>Sign Up</h3> 
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Username" value={this.state.username_val} onChange={this.handleChangeUsername} required/>
                <br />
                <input type="text" placeholder="Password" value={this.state.password_val} onChange={this.handleChangePassword} required/>
                <br />
                <br />
                <input type="submit" value="Sign Up" />
            </form>
            <p>Already have an account? <Link to='/login'>Log In</Link></p>
        </div>
        );
    }
}
export default Signup;