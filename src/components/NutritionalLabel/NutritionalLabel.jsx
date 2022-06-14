import * as React from "react"
import { nutritionFacts } from "../../constants"
import "./NutritionalLabel.css"

export function NutritionalLabel(props) {
  return (
    <div className="nutritional-label">
      <h3 className="title">Nutrition Facts</h3>

      <h4 className="item-name">{props.item.item_name}</h4>
      <ul className="fact-list">{nutritionFacts.map((fact) => (<NutritionalLabelFact key={fact.id} label={fact.label} attribute={fact.attribute} item={props.item}/>))}</ul>
    </div>
  )
}

export function NutritionalLabelFact(props) {
  let att = props.attribute
  if(props.attribute == "fiber"){
    att = "dietary_fiber" 
  }
  return (
    <li className="nutrition-fact">
      <span className="fact-label">{props.label}</span>{" "}
      <span className="fact-value">{props.item[att]}</span>
    </li>
  )
}

export default NutritionalLabel
