import React from 'react'
import Display from './Display'
import { useState } from 'react'
import ButtonsGrid from './ButtonsGrid'

function CalculatorApp() {
    const [sentence, setSentence] = useState('0')
    const [actualValue, setActualValue] = useState('0')

  return (
    <div className='calculator'>
        <Display sentence={sentence} actualValue={actualValue}/>
        <ButtonsGrid sentence={sentence} actualValue={actualValue} setActualValue={setActualValue} setSentence={setSentence} />
    </div>
  )
}

export default CalculatorApp