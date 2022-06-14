import * as React from "react"
import Chip from "./Chip/Chip.jsx"
import NutritionalLabel from "./NutritionalLabel/NutritionalLabel.jsx"

export function MenuDisplay(props){
    const menuHandler = (event, name) =>{
        props.setMenu(name)
    }
    return(
        <div className="MenuDisplay display">
          <div className="MenuItemButtons menu-items">
            <h2 className="title">Menu Items</h2>
            {props.currentMenuItems.map((items) => (
              <Chip label={items.item_name} key={items.item_name + items.calories} onClick={(e)=>menuHandler(e, items)} onClose={props.onClose} isActive={props.menuName === items ? true : false}/>
            ))}
          </div>
          {/* NUTRITION FACTS */}
          <div className="NutritionFacts nutrition-facts">{
            <NutritionalLabel item={props.menuName} />
          }</div>
        </div>
    )
}