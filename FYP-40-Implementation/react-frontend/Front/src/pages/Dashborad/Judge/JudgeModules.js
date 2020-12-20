import React from 'react'
import jbg from "../../../assets/Images/jbg.jpg"
import "./JudgeModules.css"


function JudgeModules(props) {
    return (
        <div>
            <img className="r-image" src={jbg} alt="My logo" />

            <button class="buttonn1"  onClick={() => {
                props.history.push("/Judge/EFillingCase");
              }} >E-Filling Cause List <span class="material-icons">
text_snippet
</span>
</button>
            <button  class="button2" onClick={() => {
                props.history.push("/Judge/ESummon");
              }}  >E-Summon Status <span class="material-icons">
adjust
</span></button>
            <button class="button3" onClick={() => {
                props.history.push("/Judge/CaseRecord");
              }}  >Case Record <span class="material-icons">
fiber_manual_record
</span></button>            
        </div>
    )
}

export default JudgeModules
