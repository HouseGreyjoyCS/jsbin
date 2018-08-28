import React, { Component } from "react";
import Signup from "./Signup";
import Login from "./Login";
import { BrowserRouter as Router, Route, hashHistory, Link } from "react-router-dom";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            password:""
        }
        this.passwordCheck = this.passwordCheck.bind(this);
        this.signUp = this.signUp.bind(this);
        this.handleGet = this.handleGet.bind(this);
    }
    passwordCheck() {
        fetch('http://localhost:3000/bin/:name')
        .then((res =>{
            res.json()
        } ))
        .then(res => {
            console.log()
            this.setState({ password: res})
        })
        .catch(err => console.log('Error grabbing bins ', err))
    }
    signUp() {
        // post request to DB goes here
    }
    handleGet(e){
        this.setState({password: e.target.value})
    }
    
    render () {
       return (
           <div className="loginWrapper">
           <Router>
               <div>
                   <Route path="/login" render={() => <Login />} />
                   <Route path="/signup" render={() => <Signup />} />
                </div>
           </Router>
           </div>
            // <div>
            //     <Signup passwordCheck={this.passwordCheck} password={this.handleGet}/>
            // </div>
        )
    }
}
export default App;