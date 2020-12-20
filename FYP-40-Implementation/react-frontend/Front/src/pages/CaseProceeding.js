import React from "react";
import "./CasePro.css"
import Cas from "../assets/Images/Cas.jpg"
import Box from "../components/Box"
import FormTwo from "../components/FormTwo"
import Ripples from "react-ripples";
import Footer from "../components/Footer"

// import Ripples from "react-ripples";



const CaseProceeding=()=>{
        return(
        <div className="case-pro">
        <img className="responsive-image " src={Cas} alt="My logo" /> 
        <p className="main">Case Proceeding </p> 
       <Box/> 
       <FormTwo/>
      
<Ripples className="btnn">
  <button type="button" className="btn btn-primary">
    Start Proceeding Via VideoLink
  </button>
</Ripples>
        <Footer/>
    
    

    </div>
    )
    
}
export default CaseProceeding;