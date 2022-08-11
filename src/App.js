import React, { useState } from 'react';
import './App.css';
import { evaluate } from 'mathjs'

const App = () => 
{

const calculatorButtons = [0,1,'+','-','C', 'Del','=']
const [selectedButtons, setButtonSelection] = useState([])
const [calculatorTotal, setCalculatorTotal] = useState([])

  return (
    <div>
      <h1>Numbers are {selectedButtons}</h1>
      <h1>Calculator Total is {calculatorTotal}</h1>
      {calculatorButtons.map((button, buttonKey) =>
      {
        
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
          console.log(selectedButtons)
          return(<button key = { buttonKey } onClick={() => setButtonSelection(deleteLast(selectedButtons))}>Del</button>)
        }
        else
        {
          return (<button key = { buttonKey } onClick={() => setButtonSelection(addButtons(selectedButtons, button))}>{button}</button>)
        }
      })}
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
  return selectedButtons => [...selectedButtons, button]
}

function deleteLast(selectedButtons)
{
  return selectedButtons.pop()
}



export default App