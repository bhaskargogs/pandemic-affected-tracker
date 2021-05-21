import React from 'react'
import './App.scss'
import SelectDistrict from './components/SelectDistrict/SelectDistrict'

function App() {
  return (
    <div className="container">
      <h3 className="m-3 d-flex justify-content-center">COVID-19 Tracker application</h3>
      <SelectDistrict />
    </div>
  )
}

export default App
