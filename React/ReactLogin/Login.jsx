import React from "react";
import { BrowserRouter as Router, Route, hashHistory, Link } from "react-router-dom";

const Login = (props) =>{
    console.log(props)
   return (
     
       <div>
           <h3>Log In</h3> 
           <input type="text" placeholder="Username" required/>
           <br />
           <input type="text" placeholder="Password" required/>
           <br />
           <button class="button" onClick={props.signupSubmit} value={props.Signup}>Log In</button>
           <br />
           <br />
           <p>Don't have an account? <Link to='/signup'>Sign Up</Link></p>
       </div>
       
        // <div>
        //  <h3>Password</h3>
        //  <input type="text" />
        //  <button class="button" onClick={props.passwordCheck} value={props.Password}>Password</button>
        // </div>
    );
}
export default Login;