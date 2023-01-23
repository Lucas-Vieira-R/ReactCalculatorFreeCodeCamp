import React from 'react'
import Buttons from './Buttons'

function ButtonsGrid({sentence, setSentence, actualValue, setActualValue, resultIsDisplayed, setBoolean}) {
  return (
        <Buttons sentence={sentence} setSentence={setSentence} actualValue={actualValue} setActualValue={setActualValue} resultIsDisplayed={resultIsDisplayed} setBoolean={setBoolean} /> 
  )
}

export default ButtonsGrid