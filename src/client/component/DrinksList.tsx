import React from 'react'
import DrinksCard from './DrinksCard'



const DrinksList = (props:any) => {
    
  let DrinksList = props.List.map((el:any)=><DrinksCard drinkDetails={el}/>)


  return (
      <div>
          <ul>
            {DrinksList}
          </ul>
      </div>
      
  )
}

export default DrinksList