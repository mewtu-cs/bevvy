import React from 'react';
import Searchbar from './component/Searchbar'
import Navbar from './component/Navbar'

const App: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <Searchbar/>
    </div>
  )
}

export default App;