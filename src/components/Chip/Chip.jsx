import * as React from "react"
import "./Chip.css"
import { useState } from "react"

export function Chip({ label = "", isActive = false }) {
  const [state, setState] = useState(0)
  const changeActive = () => {
    setState(true)
    isActive = true
  }
  var buttonClassName;
  if(isActive){
    buttonClassName = "chip active";
  }
  else{
    buttonClassName = "chip"
  }
  return (
    <button className={buttonClassName} onclick ={function(){this.setState()}}>
      <p className="label">{label}</p>
      <span className ="close" role="button">{`X`}</span>
    </button>
  )
}

export default Chip
