import React from 'react'
import './App.scss'
import { NavigationBar } from './components/NavigationBar/NavigationBar'
import RootBox from './components/RootBox/RootBox'

const App = () => {
  return (
    <div className="App">
      <NavigationBar />
      <RootBox />
    </div>
  )
}

export default App
