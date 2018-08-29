import React, { Component } from "react";
import Signup from "./Signup";
import Login from "./Login";
import { BrowserRouter as Router, Route, hashHistory, Link } from "react-router-dom";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:'',
        }
        
        this.logIn = this.logIn.bind(this);
        this.signUp = this.signUp.bind(this);
    }
   
    logIn(username, password) {        
        let newPost = {
            username: username,
            password: password,
        }
        fetch('/loginUser', {
            method: 'POST',
            body: JSON.stringify(newPost),
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(res => {
            if(res) {
                redirect: window.location.href = 'http://localhost:3000/admin/';
            } else {
                alert("Invalid username/password. Try again.");
            }
        })
        .catch(error => console.error('Error ', error))
    }

    signUp(username, password) {
        let newPost = {
            username: username,
            password: password,
        }
        fetch('/createUser', {
            method: 'POST',
            body: JSON.stringify(newPost),
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(res => {
            if(res) {
                redirect: window.location.href = 'http://localhost:3000/admin/';
            } else {
                alert("error on signup!");
            }
        })
        .catch(error => console.error('Error ', error))
    }
    
    render () {
       return (
           <div className="loginWrapper">
           <Router>
               <div>
                   <Route path="/login" render={() => <Login logIn={this.logIn}/>} />
                   <Route path="/signup" render={() => <Signup signUp={this.signUp}/>} />
                </div>
           </Router>
           </div>
        )
    }
}
export default App;