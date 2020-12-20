import React from "react";
import Efbg from "../../assets/Images/bgef.jpg";
import court from "../../assets/Images/lawLogin.jpg";
import axios from "axios"
import {Formik,Form, useFormik} from "formik"
import * as Yup from "yup"
// import Card from "../../shared/UIElements/Card"
import Wrap from "../../shared/UIElements/Wrap"
import "./EFilling.css"

const initialValues={
    email:'',
    password:''
  }
  
  
  const validationSchema=Yup.object({
    email:Yup.string().email("Invalid email Format").required("Required!!"),
    password:Yup.string().required("Required")
  
  
  })
  const onSubmit=values=>{
  console.log("Form data",values)
  }
  
const handleForm=async event=>{
  event.preventDefault();
  try{
    const response=await  fetch("http://localhost:2000/api/users/login",{
    method:"POST",
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      email:initialValues.email,
      password:initialValues.password

    })
  })
  const responseData=await response.json();
  console.log(responseData);

  }catch(err){
    console.log(err)
    
  }
  
}


const EFilling=(props)=>{
    const formik=useFormik({
        initialValues,
        onSubmit,
       validationSchema,
        
     })
      console.log("form errors",formik.touched)

    
    return(
        
         
        
          <div>
              <div className="authentication">
              <Wrap>
      <img className="res-image" src={court} alt="My logo" />
        
        
     <form onSubmit={handleForm}>         
      <label className="Email">Email</label>
      <input type="text" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
  {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div>:null}

      <label className="password">Password</label>
      <input type="password" name="password" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
      {formik.touched.password && formik.errors.password ? <div className="error">{formik.errors.password}</div>:null}
      
      <button className="Login-cms-btn" disabled={!formik.isValid}  onClick={() => {
                props.history.push("/File");
              }}>Login</button>
      </form>
     
      </Wrap>

              </div>
         
          </div>
    
    )
    // axios.post("http://localhost:8000/api/signIn")
}
export default EFilling;


