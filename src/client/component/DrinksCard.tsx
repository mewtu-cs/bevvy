import React from 'react'
import '../style/DrinksCard.css'

const DrinksCard = (props:any) => {
    const {strDrink, strDrinkThumb, idDrink} = props.drinkDetails 
    const url = `https://www.thecocktaildb.com/drink/${idDrink}`

  return (
    <div className='card'>
        <h2>{strDrink}</h2>
        <a href={url} target='_blank'>yes</a>
        <br></br>
        <img className='drink-image' src={strDrinkThumb}/>
    </div>
  )
}

export default DrinksCard