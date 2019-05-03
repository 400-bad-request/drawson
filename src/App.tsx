import React from 'react'
import './App.scss'
import { NavigationBar } from './components/NavigationBar/NavigationBar'
import RootComponent from './components/RootComponent/RootComponent'

const App = () => {
  return (
    <div className="App">
      <NavigationBar />
      <RootComponent />
    </div>
  )
}

export default App
