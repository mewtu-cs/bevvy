import React, { useState, useEffect } from 'react'
import DrinksList from './DrinksList';
import {Autocomplete, TextField} from '@mui/material'
interface AutocompleteOption {
    label: string;
    id: number
  }


const Searchbar: React.FC = () => {
    const [Search, setSearch] = useState('Margarita')
    const [List, setList] = useState([])
    const [Drinks, setDrinks] = useState([])
    const options: AutocompleteOption[] = [{ label: 'The Godfather', id: 1 }];
    const getDrinks = async (Search:string) =>{
        const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${Search}`
        const response = await fetch(url);
        const responseJson = await response.json();
        if(responseJson.drinks){
            // console.log(responseJson.drinks)
            setList(responseJson.drinks)
            console.log(List)
        }
    }

    useEffect(()=>{
        getDrinks(Search);
    },[Search])

  return (
      <>    
        <label >Search Cocktails</label>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={options}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Movie" />}
        ></Autocomplete>
        <input value={Search} onChange={(e)=> setSearch(e.target.value)}/>
        <DrinksList key='drinkslist' List={List}/>
        
      </>
  )
}

export default Searchbar