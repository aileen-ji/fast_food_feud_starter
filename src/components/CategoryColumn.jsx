import * as React from "react"
import Chip from "./Chip/Chip.jsx"

export function CategoriesColumn(props){
    let [categoryName, setCategory] = useState(0)
    return(
        <div className="CategoriesColumn col">
        <div className="categories options">
          <h2 className="title">Categories</h2>
          {props.categories.map((category) =>(
            <Chip key={category} label={category} onClick={()=>setCategory(category)} onClose={()=>setCategory(0)} isActive={categoryName === category ? true : false} />
          ))}
        </div>
      </div>
    )
}