import React, { Component } from 'react';
import { FormErrors } from "../../components/FormErrors"
import './LoginCMS.css';
import Wrap from "../../shared/UIElements/Wrap"
import signup from "../../assets/Images/sign.PNG"
import history from "../../components/history";
import {Link} from "react-router-dom"
import PasswordMask from 'react-password-mask';
class Form extends Component {
  
  constructor (props) {
    super(props);
    this.state = {
      name:'',
      email: '',
      password: '',
      isLoading:'',
      error:'',
      formErrors: {email: '', password: '',name:''},
      nameValid:false,
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
  }
  

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }
 
//form validation starts
  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let nameValid = this.state.nameValid;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
        case 'name':
        nameValid = value.length >= 6;
        fieldValidationErrors.name = nameValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid,
                    nameValid:nameValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.nameValid &&this.state.emailValid && this.state.passwordValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }
  //form validation ends
 authSubmithandler=async event =>{
   event.preventDefault();

  try {
   
    const response = await fetch('http://localhost:2000/api/users/signUp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        email:this.state.email,
        password: this.state.password
      })
    });

    const responseData = await response.json();
    if(this.email==this.email){
      alert("User already exits! please login")
    }
    else{
      alert("You are signUp")
    }
    
    console.log(responseData);
  } catch (err) {
    console.log(err);
  }

}
  render (props) {
    return (
      <form onSubmit={this.authSubmithandler} className="Form">
        <Wrap>
        <img className="sign-img" src={signup}/>
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>

        <div className={`form-group ${this.errorClass(this.state.formErrors.name)}`}>
          <label htmlFor="name">Name:</label>
          <input type="passwordd" required className="form-control" name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleUserInput}  />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
          <label htmlFor="email">Email address</label>
          <input type="email" required className="form-control" name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleUserInput}  />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
          <label htmlFor="password">Password</label>
          <input type="passwordd" className="form-control" name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleUserInput}  />
        </div>
        <button type="submit" className="btn btn-primary" 
        disabled={!this.state.formValid}
        alert ={this.state.formValid}
        
       
       
       
        >
          Sign up </button>
          <div className="already-user"><p>Already a user?Need<Link to={'/AdminLogin'}> Sign In</Link> </p></div>
        </Wrap>
      </form>
    )
  }
}

export default Form;