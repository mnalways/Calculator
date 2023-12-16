import React from 'react'
import Style from "./Operation.module.scss";
import Box from './Box';

interface Props {
    result: string;
    onChange: (value: string) => void;
}

const Operation = ({result, onChange}: Props) => {
    const onEqual = () => {
        try {
            onChange(eval(result).toString());
        } catch {
            onChange('Syntax error');
        }
    }

    const operations = [
        {text: 'AC', onClick: () => onChange((''))},
        {text: 'Del', onClick: () => onChange((result.slice(result.length-1, 1)))},
        {text: '~', onClick: () => onChange((result + '~'))}, // divide
        {text: '7', onClick: () => onChange(result + '7')},
        {text: '8', onClick: () => onChange(result + '8')},
        {text: '9', onClick: () => onChange(result + '9')},
        {text: '*', onClick: () => onChange((result + '*'))}, // multiply
        {text: '4', onClick: () => onChange(result + '4')},
        {text: '5', onClick: () => onChange(result + '5')},
        {text: '6', onClick: () => onChange(result + '6')},
        {text: '-', onClick: () => onChange((result + '-'))}, // minus
        {text: '1', onClick: () => onChange(result + '1')},
        {text: '2', onClick: () => onChange(result + '2')},
        {text: '3', onClick: () => onChange(result + '3')},
        {text: '+', onClick: () => onChange((result + '+'))}, // add
        {text: '0', onClick: () => onChange(result + '0')},
        {text: '.', onClick: () => onChange(result + '.')},
        {text: '=', onClick: () => onEqual()}, // result
    ]
  return (
    <div className={Style.operationContainer}>
        {operations.map((op) => {
            return <Box text={op.text} onClick={op.onClick}/>
        })}
    </div>
  )
}

export default Operation;
