import React from "react";
import PForm from "./patientrecordform";
import './patientrecordform.css';
import { Link } from 'react-router-dom';
const Pform2=()=>{
  return(
    <div className="brownMycontainer2">
      <div className="browncard12">
        <button class="brownbutton42"><Link to='/'>HOME</Link></button>
      <div className="browncard32">
        <div className="brownSymbol2"></div>
      <div className="browntext123">BODHI PLUS</div>
      </div>
      <div className="browncard2">
        <div className="browncard-header2">PATIENT MEDICAL RECORD</div>
      
          </div>
          <PForm/>
          </div>

      <div  className="browndiv52">
          <div className="brownc42">Currently taking medicines</div>
          <hr class="brownhr42"></hr>
          <input id="brownchi12" type="text1" name="text1" placeholder="Enter your  medicines" />
          <input id="brownchi22" type="text1" name="text1" placeholder="Enter your  medicines" />
          <input id="brownchi32" type="text1" name="text1" placeholder="Enter your  medicines" />
          </div>
          <div  className="browndiv62">
          <div className="brownc52">Recent Medical History</div>
          <hr class="brownhr52"></hr>
          <input id="brownchi12" type="text1" name="text1" placeholder="Enter your  medical history" />
          <input id="brownchi22" type="text1" name="text1" placeholder="Enter your  medical history" />
          <input id="brownchi32" type="text1" name="text1" placeholder="Enter your  medical history" />
          <button class="brownbutton32">Print a copy</button>
          </div>
          <div  className="browndiv72">
          <div className="brownc62">Recent Surgeries</div>
          <hr class="brownhr62"></hr>
          <input id="brownchi12" type="text1" name="text1" placeholder="Enter your recent Surgeries" />
          <input id="brownchi22" type="text1" name="text1" placeholder="Enter your recent Surgeries" />
          <input id="brownchi32" type="text1" name="text1" placeholder="Enter your recent Surgeries" />
          </div>
    </div>
    )
}

export default Pform2;