import React from 'react'
import Buttons from './Buttons'

function ButtonsGrid({sentence, setSentence, actualValue, setActualValue}) {
  return (
        <Buttons sentence={sentence} setSentence={setSentence} actualValue={actualValue} setActualValue={setActualValue} /> 
  )
}

export default ButtonsGrid