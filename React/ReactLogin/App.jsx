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
        console.log("username from App.jsx logIn", username);
        console.log("password from App.jsx logIn", password);
        //window.location.href = 'http://localhost:3000/admin/'
    }
    signUp(username, password) {
        console.log("username from App.jsx signUp", username);
        console.log("password from App.jsx signUp", password);
        
        let newPost = {
            username: username,
            password: password,
        }
        fetch(`http://localhost:3000/admin/createUser`, {
            method: 'POST',
            body: JSON.stringify(newPost),
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(data => {
            if(data.response) {
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