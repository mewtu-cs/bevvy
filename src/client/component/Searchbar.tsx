import React, { useState, useEffect } from 'react'
import DrinksList from './DrinksList';
import {Autocomplete, TextField} from '@mui/material'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material';



const Searchbar: React.FC = () => {
    const [Search, setSearch] = useState('Margarita')
    const [List, setList] = useState([])
    const [Drinks, setDrinks] = useState([])
    // const options: any = List;
    const getDrinks = async (Search:string) =>{
        const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${Search}`
        const response = await fetch(url);
        const responseJson = await response.json();
        if(responseJson.drinks){
            // console.log(responseJson.drinks)
            setList(responseJson.drinks)
            console.log(List)
            setDrinks(List.map((el)=>el["strDrink"]))
        }
    }
    useEffect(()=>{
        getDrinks(Search);
    },[Search])
  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2} >
      <Grid item xs={8}>
          <Typography  sx={{paddingTop:15}}>Search Cocktails</Typography>
      </Grid>
      <Grid item xs={4}>
      </Grid>
      <Grid item xs={4}>
          <Autocomplete
          value={Search}
          onInputChange={(event, newInputValue:string) => {
              setSearch(newInputValue);
          }}
          disablePortal
          id="combo-box-demo"
          options={Drinks}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Drinks" />}
          ></Autocomplete>
      </Grid>
      <Grid item xs={8}>

      </Grid>
      <Grid item xs={4}>
        <DrinksList key='drinkslist' List={List}/>
      </Grid>
    </Grid>
  </Box>
    //   <div>
    //   <br></br>
    //  <label >Search Cocktails</label>

    //   <DrinksList key='drinkslist' List={List}/>
      
    // </div>

  )
}

export default Searchbar