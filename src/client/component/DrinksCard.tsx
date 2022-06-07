import React from 'react'
import '../style/DrinksCard.css'

interface Props{
  drinkDetails: {
    idDrink:string,
    strDrink: string,
    strDrinkThumb: string
  };
}

const DrinksCard: React.FC<Props> = (props) => {
    const {strDrink, strDrinkThumb, idDrink} = props.drinkDetails; 
    const url = `https://www.thecocktaildb.com/drink/${idDrink}`

  return (
    <div className='card'>
        <h2>{strDrink}</h2>
        <a href={url} target='_blank'>Ingredients</a>
        <br></br>
        <img className='drink-image' src={strDrinkThumb}/>
    </div>
  )
}

export default DrinksCard