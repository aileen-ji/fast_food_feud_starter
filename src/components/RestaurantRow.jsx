import * as React from "react"
import Chip from "./Chip/Chip.jsx"


export function RestaurantRow(props){
    const resHandler = (event, name) =>{
        props.setRestaurant(name)
    }
    return(
        <div className="RestaurantsRow">
          <h2 className="title">Restaurants</h2>
          <div className="restaurants options">
            {props.restaurants.map((restaurant) =>(
            <Chip key={restaurant} label={restaurant} onClick={(e)=>resHandler(e, restaurant)} onClose={props.onClose} isActive={props.restaurantName === restaurant ? true : false}/>
          ))}</div>
        </div>)
}