import React, { useState } from 'react';
import './App.css';
import { evaluate } from 'mathjs'

const App = () => 
{
const calculatorButtons = [0,1,2,3,4,5,6,7,8,9,'+','-','/','*','C','Del','=']
const [selectedButtons, setButtonSelection] = useState([])
const [calculatorTotal, setCalculatorTotal] = useState([])

  return (
    <div className='calculatorContainer'>
      <div className="calculatorTotalScreen">
        <h1>Numbers: {selectedButtons}</h1>
        <h1>Total: {calculatorTotal}</h1>
      </div>
      
      <div className='calculatorButtons'>
      {calculatorButtons.map((button, buttonKey) =>
        {
          if (button === '=') 
          {
            return(<button className='equalsButton' key= { buttonKey } onClick={() => setCalculatorTotal(returnResult(selectedButtons))}>=</button>)
          }
          else if (button === 'C')
          {
            return(<button key = { buttonKey } onClick={() => clearAll(setButtonSelection, setCalculatorTotal)}>C</button>)
          }
          else if (button === 'Del')
          {
            return(<button key = { buttonKey } onClick={() => setButtonSelection(deleteLast(selectedButtons))}>Del</button>)
          }
          else
          {
            return (<button key = { buttonKey } onClick={() => setButtonSelection(addButtons(selectedButtons, button))}>{button}</button>)
          }
        })}
      </div>
    </div>
  )
}

function clearAll(setButtonSelection, setCalculatorTotal)
{
  return [setButtonSelection(""), setCalculatorTotal("")]
}

function returnResult(selectedButtons)  
{
  return evaluate(selectedButtons.join(""))
}

function addButtons(selectedButtons, button)
{
  if ((button === '/' || button === '*') && ((typeof selectedButtons[selectedButtons.length - 1] === 'string')))
  {
    return(selectedButtons)
  }
  else if ((button === '+' || button === '-') && (selectedButtons[selectedButtons.length - 1] === '/' || selectedButtons[selectedButtons.length - 1] === '*'))
  {
    return selectedButtons
  }
  else
  {
    return selectedButtons => [...selectedButtons, button]
  }

}

function deleteLast(selectedButtons)
{
  return selectedButtons.slice(0, -1)
}

export default App