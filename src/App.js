import React, { useState } from 'react';
import './App.css';
import { evaluate } from 'mathjs'

const App = () => 
{

const [calculatorButtons, setCalculatorButtons] = useState([0,1,'+','-','C','='])
const [selectedButtons, setButtonSelection] = useState([])
const [calculatorTotal, setCalculatorTotal] = useState([])

  return (
    <div>
      {calculatorButtons.map((button, buttonKey) =>
      {
        if (button === '=') 
        {
          return(
          <div>
          <button key= {buttonKey} onClick={() => setCalculatorTotal(returnResult(selectedButtons))}>=</button> 
          <h1>Numbers are {selectedButtons}</h1>
          <h1>Calculator Total is {calculatorTotal}</h1>
          </div>
          )
        }
        else if (button === 'C')
          return(<button key= {buttonKey} onClick={() => clearAll(setButtonSelection, setCalculatorTotal)}>C</button>)
        else
        {
          return (<button key= {buttonKey} onClick={() => setButtonSelection(addButtons(selectedButtons, button))}>{button}</button>)
        }
      })}
    </div>
  )
}

function clearAll(setButtonSelection, setCalculatorTotal)
{
return setButtonSelection(""), setCalculatorTotal("")
}


function returnResult(selectedButtons)  
{
  return evaluate(selectedButtons.join(""))
}

function addButtons(selectedButtons, button)
{
  return selectedButtons => [...selectedButtons, button]
}



export default App