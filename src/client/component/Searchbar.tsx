import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import DrinksList from './DrinksList';



const Searchbar = () => {
    const [Search, setSearch] = useState('Margarita')
    const [List, setList] = useState([])
    // const drinks:any = []
    const [Drinks, setDrinks] = useState([])
    


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
        <input value={Search} onChange={(e)=> setSearch(e.target.value)}/>
        <DrinksList key='drinkslist' List={List}/>
        

      </>
  )
}

export default Searchbar