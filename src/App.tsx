import React from 'react'
import Calculator from './Calculator.container'
import Style from "./App.module.scss";

function App() {
  return (
    <div className={Style.AppContainer}>
      <Calculator />
    </div>
  )
}

export default App
