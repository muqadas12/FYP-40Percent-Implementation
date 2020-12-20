import React from 'react'
import "./CaseAccept.css"
import CaseAcept from "../../../assets/Images/caseAcept.jpg"

function CaseAccept() {
    return (
        <div className="case-accept-img">
 <img className="responsive-image" src={CaseAcept} alt="My logo" />

    <form>
        <p className="accept-case" >Case Accept:</p>
        <label className="label-cnn">Case Number:</label>
        <input className="cn" type="number"/>
        <br/>
        <br/>
        <label className="label-cnn">Date of hearing:</label>
        <input className="date-hearing" type="date"/>
    </form>
        </div>
    )
}

export default CaseAccept
