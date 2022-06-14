import * as React from "react"
import Chip from "./Chip/Chip.jsx"

export function CategoriesColumn(props){
    const catHandler = (event, name) =>{
        props.setCategory(name)
    }
    return(
        <div className="CategoriesColumn col">
        <div className="categories options">
          <h2 className="title">Categories</h2>
          { props.categories.map((category) =>(
            <Chip key={category} label={category} onClick={(e)=>catHandler(e, category)} onClose={props.onClose} isActive={props.categoryName === category ? true : false} />
          ))}
        </div>
      </div>
    )
}