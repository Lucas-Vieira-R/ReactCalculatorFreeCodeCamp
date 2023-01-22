import React from 'react'
import { evaluateInfix } from 'calculator-lib'



function Buttons({setSentence, setActualValue, sentence, actualValue}) {

    const clear = function(){
        console.log('clear')
        setSentence('0')
        setActualValue('0')
    }
    const equals = function(e){
        console.log(e.target.innerHTML)
        let result = evaluateInfix(sentence)
        console.log(result)
        setActualValue(result.toString())
        setSentence(result.toString())
    }
    const add = function(e) {
        console.log(e.target.innerHTML)
        let str = e.target.innerHTML;
        let sentenceArray = sentence.split(/[\+\-\*\/]/);
        let lastChar = sentence.slice(-1);
    
        if (str === '.' && (sentenceArray[sentenceArray.length -1].includes('.') || actualValue.includes('.'))) {
            return;
        }
    
        if(str === '/' || str === '*' || str === '+') {
            if(lastChar === '/' || lastChar === '*' || lastChar === '+') {
                setSentence(sentence.slice(0,-1) + str)
            } else {
                setSentence(sentence + str);
            }
            setActualValue("0");
        } else if(str === '-') {
            if(lastChar === '/' || lastChar === '*' || lastChar === '+' || lastChar === '-' || sentence === '') {
                setSentence(sentence === '0' ? str : sentence + str)
            } else {
                setSentence(sentence === '0' ? str : sentence + str);
            }
            setActualValue(str);
        }else {
            setSentence(sentence === '0' ? str : sentence + str);
            setActualValue(actualValue === '0' ? str : actualValue + str);
        }
    }
    
    
    

    const values = [{'value':'AC','id':'clear','onclick':clear,'divId':'Clear'},
                    {'value':'/','id':'divide','onclick':add,'divId':'Divide'},
                    {'value':'*','id':'multiply','onclick':add,'divId':'Multiply'},
                    {'value':'7','id':'seven','onclick':add,'divId':'Seven'},
                    {'value':'8','id':'eight','onclick':add,'divId':'Eight'},
                    {'value':'9','id':'nine','onclick':add,'divId':'Nine'},
                    {'value':'-','id':'subtract','onclick':add,'divId':'Subtract'},
                    {'value':'4','id':'four','onclick':add,'divId':'Four'},
                    {'value':'5','id':'five','onclick':add,'divId':'Five'},
                    {'value':'6','id':'six','onclick':add,'divId':'Six'},
                    {'value':'+','id':'add','onclick':add,'divId':'Add'},
                    {'value':'1','id':'one','onclick':add,'divId':'One'},
                    {'value':'2','id':'two','onclick':add,'divId':'Two'},
                    {'value':'3','id':'three','onclick':add,'divId':'Three'},
                    {'value':'=','id':'equals','onclick':equals,'divId':'Equals'},
                    {'value':'0','id':'zero','onclick':add,'divId':'Zero'},
                    {'value':'.','id':'decimal','onclick':add,'divId':'Decimal'}]

  return (
    <div id='ButtonsGrid'>{values.map(value => <div className='buttonDiv' id={value.divId}><button id={value.id} onClick={value.onclick}>{value.value}</button></div>)}</div>
  )
}

export default Buttons