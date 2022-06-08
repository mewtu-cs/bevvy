import React from 'react'
import '../styles/DrinksCard.css'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'

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
    <Box sx={{backgroundColor:'black'}}>
        <h2>{strDrink}</h2>
        <a href={url} target='_blank'>Ingredients</a>
        
        <img className='drink-image' src={strDrinkThumb}/>

    </Box>
  )
}

export default DrinksCard