import React, { useState } from 'react';
import './App.css';
import { evaluate } from 'mathjs'

const App = () => 
{
const calculatorButtons = [0,1,2,3,4,5,6,7,8,9,'+','-','/','*','C','Del','=']
const [selectedButtons, setButtonSelection] = useState([])
const [calculatorTotal, setCalculatorTotal] = useState([])

  return (
    <div>
      <div className="calculatorTotalScreen">
        <h1>Numbers are {selectedButtons}</h1>
        <h1>Calculator Total is {calculatorTotal}</h1>
      </div>
      
      <div>
      {calculatorButtons.map((button, buttonKey) =>
        {
          console.log(selectedButtons[selectedButtons.length - 1]) 
          if (button === '=') 
          {
            return(<button key= { buttonKey } onClick={() => setCalculatorTotal(returnResult(selectedButtons))}>=</button>)
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
  if ((button === '/' || button === '*') && (selectedButtons[selectedButtons.length - 1] === button))
  {
    return(selectedButtons)
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