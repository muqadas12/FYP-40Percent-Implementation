import React from "react";
import log from "../../../assets/Images/log.jpg";
import "./Login.css"
import Card from "../../../shared/UIElements/Card"
import LoginForm from "../../../components/LoginForm"

const Login=(props)=>{
    return(
        <div className="authentication">
        <Card >
        <img className="responsive-image" src={log} alt="My logo" />
        <LoginForm/>
       <button className="logbtn" onClick={() => {
                props.history.push("/Judge/JudgeModules");
              }}>Login</button>
         
  
    
        </Card>
  
      </div>

    )
}
export default Login;