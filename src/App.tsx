import React from 'react'
import logo from './logo.svg'
import './App.scss'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>{process.env.REACT_APP_API_URL}</div>
      </header>
    </div>
  )
}

export default App
