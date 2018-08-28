import React from "react";
import { BrowserRouter as Router, Route, hashHistory, Link } from "react-router-dom";


const Signup = (props) =>{
    console.log(props)
   return (
       <div>
           <h3>Sign Up</h3> 
           <input type="text" placeholder="Username" required/>
           <br />
           <input type="text" placeholder="Password" required/>
           <br />
           <button class="button" onClick={props.signupSubmit} value={props.Signup}>Sign Up</button>
           <br />
           <br />
           <p>Already have an account? <Link to='/login'>Log In</Link></p>
       </div>
        // <div>
        //  <h3>Password</h3>
        //  <input type="text" />
        //  <button class="button" onClick={props.passwordCheck} value={props.Password}>Password</button>
        // </div>
    );
}
export default Signup;