import React from 'react';
import Searchbar from './component/Searchbar'
import {Typography}from'@mui/material'

const App: React.FC = () => {
  return (
    <div>
      <div>Hello from App.tsx</div>
      <Typography>Hello!</Typography>
      <Searchbar/>


    </div>
  )
}

export default App;