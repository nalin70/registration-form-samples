import React from "react";

function cdac() {
    return(
        <div>
            <h2>Select Center</h2>
            <select id="dropdown" name="dropdown">
                <option value="option1">Pune</option>
                <option value="option2">Banglore</option>
                <option value="option3">Noida</option>
            </select>
            <h2> Select Courses : </h2>
            <select id="dropdown" name="dropdown" >            
               <option value="dac" selected >DAC</option>
                <option value="dbda">DBDA</option>
                <option value="dbda">DESD</option>
               <option value ="ditiss">DITISS</option>
            
            </select>
        </div>
    )
}

export default cdac;
