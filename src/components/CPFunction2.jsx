import React from 'react';
import { FaMicrophone } from "react-icons/fa";
import { IoVideocam } from "react-icons/io5";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { CiMenuKebab } from "react-icons/ci";

function CPFunction2() {
  return (
    <>
    <div className="f2">
     
     <div className="end-jam">
       <div>
         <button className="end-btn">End Jam</button>
       </div>
       <div><FaMicrophone /> <br /> 
       <CiMenuKebab  className="sub-menu"  /></div>
       <div><IoVideocam /> <br /> 
       <CiMenuKebab  className="sub-menu" /></div>
       <div><HiMiniSpeakerWave /></div>
       <div ><CiMenuKebab style={{ transform: 'rotate(90deg)' }} /></div>

     </div>
     </div> 
    </>
  )
}

export default CPFunction2
