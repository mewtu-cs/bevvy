import React from 'react'
import DrinksCard from './DrinksCard'

interface Props {
  List: {}[];
}



const DrinksList:React.FC<Props> = (props) => {
    
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