import React from "react";
import Courts from "../../../assets/Images/casea.jpg"
import "./EFilling.css";
import CaseForm from "../../../components/CaseForm"
const EFillingCase=(props)=>{
    return(
        <div className="case-accept">
    
    <img className="responsive-image" src={Courts} alt="My logo" />
    <h2>Case List</h2>
    <CaseForm/>
    <button
        className="accept"
        onClick={() => {
            props.history.push("/Judge/EFillingCase/CaseAccept");
          }}
      >
        Accept
      </button>
      <button className="dismiss">Dismiss</button>
      <button className="Refer">Refer</button>
    <br/>
    <br/>
    <CaseForm/>
    <button
        className="accept"
        onClick={() => {
            props.history.push("/Judge/EFillingCase/CaseAccept");
          }}
      >
        Accept
      </button>
      <button className="dismiss">Dismiss</button>
      <button className="Refer">Refer</button>

    </div>

    )
}
export default EFillingCase;