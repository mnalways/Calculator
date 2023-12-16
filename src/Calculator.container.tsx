import React, { useState } from 'react'
import Style from "./Calculator.module.scss";
import Operation from './Operation';

const Calculator = () => {
    const [result, setResult] = useState('');
  return (
    <div className={Style.calculatorContainer}>
        <div className={Style.screen}>{result}</div>
        <Operation result={result} onChange={setResult}/>
    </div>
  )
}

export default Calculator;
