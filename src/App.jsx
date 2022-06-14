import * as React from "react"
// IMPORT ANY NEEDED COMPONENTS HERE
import { createDataSet } from "./data/dataset"
import "./App.css"
import "./components/Header/Header.jsx"
import Header from "./components/Header/Header.jsx"
import "./components/Instructions/Instructions.jsx"
import Instructions from "./components/Instructions/Instructions.jsx"
import "./components/Chip/Chip.jsx"
import Chip from "./components/Chip/Chip.jsx"
import { useState } from "react"
import "./components/NutritionalLabel/NutritionalLabel.jsx"
import NutritionalLabel from "./components/NutritionalLabel/NutritionalLabel.jsx"
import { CategoriesColumn } from "./components/CategoryColumn"

// don't move this!
export const appInfo = {
  title: `Fast Food Feud 🍔!`,
  tagline: `Folks' Favorite Friendly Fuel Finder For Food Facts`,
  description: `Finding healthy food is hard. Sometimes we just settle for what's available. That doesn't mean we shouldn't know what's going into our bodies! Fast Food Feud is here to arm the public with all the nutritional facts needed to make informed decisions about fast food consumption.`,
  dataSource: `All data pulled from the MenuStat.org interactive online database.`,
  instructions: {
    start: `Start by clicking on a food category on the left and a fast food joint from the list above. Afterwards, you'll be able to choose from a list of menu items and see their nutritional content.`,
    onlyCategory: `Now select a fast food restaurant from the list above!`,
    onlyRestaurant: `Now select a category from the list on the left!`,
    noSelectedItem: `Almost there! Choose a menu item and you'll have the fast food facts right at your fingertips!`,
    allSelected: `Great choice! Amazing what a little knowledge can do!`,
  },
}
// or this!
const { data, categories, restaurants } = createDataSet()

export function App() {
  let [categoryName, setCategory] = useState(0)
  let [restaurantName, setRestaurant] = useState(0)
  let [menuName, setMenu] = useState(0)

  const returnInstr = () => {
    if(categoryName == 0 && restaurantName == 0){
      return appInfo.instructions.start
    }
    else if(categoryName != 0 && restaurantName == 0){
      return appInfo.instructions.onlyCategory
    }
    else if(restaurantName != 0 && categoryName == 0){
      return appInfo.instructions.onlyRestaurant
    }
    else if(menuName == 0){
      return appInfo.instructions.noSelectedItem
    }
    else{
      return appInfo.instructions.allSelected
    }
  }


  let currentMenuItems = data.filter((item) => {return item.food_category === categoryName && item.restaurant === restaurantName});
  return (
    <main className="App">
      {/* CATEGORIES COLUMN */}
      <div className="CategoriesColumn col">
        <div className="categories options">
          <h2 className="title">Categories</h2>
          {categories.map((category) =>(
            <Chip key={category} label={category} onClick={()=>setCategory(category)} onClose={()=>setCategory(0)} isActive={categoryName === category ? true : false} />
          ))}
        </div>
      </div>

      {/* MAIN COLUMN */}
      <div className="container">
        {/*Headers*/}
        <Header title={appInfo.title} tagline={appInfo.tagline} description={appInfo.description}/>
        {/* RESTAURANTS ROW */}
        <div className="RestaurantsRow">
          <h2 className="title">Restaurants</h2>
          <div className="restaurants options">{restaurants.map((restaurant) =>(
            <Chip key={restaurant} label={restaurant} onClick={()=>setRestaurant(restaurant)} onClose={()=>setRestaurant(0)} isActive={restaurantName === restaurant ? true : false}/>
          ))}</div>
        </div>

        {/* INSTRUCTIONS GO HERE */}
        <Instructions instructions={returnInstr()} /> 


        {/* MENU DISPLAY */}
        <div className="MenuDisplay display">
          <div className="MenuItemButtons menu-items">
            <h2 className="title">Menu Items</h2>
            {currentMenuItems.map((items) => (
              <Chip label={items.item_name} key={items.item_name + items.calories} onClick={()=>setMenu(items)} onClose={()=>setMenu(0)} isActive={menuName === items ? true : false}/>
            ))}
          </div>
          {/* NUTRITION FACTS */}
          <div className="NutritionFacts nutrition-facts">{
            <NutritionalLabel item={menuName} />
          }</div>
        </div>

        <div className="data-sources">
          <p>{appInfo.dataSource}</p>
        </div>
      </div>
    </main>
  )
}

export default App
