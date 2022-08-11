// // import the useState hook if you want to store values in the state
// import React, { useState } from 'react';
// import './App.css';

// const App = () => 
// {
//   const [calculatorButtons, setCalculatorButtons] = useState([0,1,2,3,4,5,6,7,8,9,"+","-","="])

//   // state = {
//   //   calculatorButtons: [0,1,2,3,4,5,6,7,8,9,"+","-","="]

//   return (
//     <div>
//       {calculatorButtons.map((button, buttonKey) =>
//       {
//         return <h1 key = { buttonKey }>The button is {button}</h1>
//       })}
//     </div>
//   )
// }
// export default App




    //   <div>
    //     <h2>If/else statement</h2>
    //     <p>Number is {add}</p>
    //     {/* <button onClick={() => setToggle(!toggle)}>Toggle</button> */}
    //     <button onClick={function() {(addNumber(calculatorButtons[0] += add))}}>0</button>
    //     <button onClick={function() {(addNumber(calculatorButtons[1] += add))}}>1</button>
    //     <button onClick={function() {(addNumber(calculatorButtons[2] += add))}}>2</button>
    //     <button onClick={function() {(addNumber(calculatorButtons[3] += add))}}>3</button>
    //     <button onClick={function() {(addNumber(calculatorButtons += add))}}>4</button>
    //     <button onClick={function() {(addNumber(calculatorButtons += add))}}>5</button>
    //     <button onClick={function() {(addNumber(calculatorButtons += add))}}>6</button>
    //     <button onClick={function() {(addNumber(calculatorButtons += add))}}>7</button>
    //     <button onClick={function() {(addNumber(calculatorButtons += add))}}>8</button>
    //     <button onClick={function() {(addNumber(calculatorButtons += add))}}>9</button>
    //     <button onClick={function() {(addNumber(calculatorButtons += add))}}>+</button>
    //     <button onClick={function() {(addNumber(calculatorButtons += add))}}>-</button>
    //   </div>
    // )
    // else
    // {
    //   <h2>Fail</h2>
    //   gameState = false
    // }


import React, { useState } from 'react';
import './App.css';
import { evaluate } from 'mathjs'

const App = () => 
{

const [calculatorButtons, setCalculatorButtons] = useState([0,1,2,'+','-'])
// const [calculatorOperators, setCalculatorOperators] = useState([])
const [selectedButtons, setButtonSelection] = useState([])
const [calculatorTotal, setCalculatorTotal] = useState([])
// let testNumber = 0
//let calculateState = true
//let calculation = [12,"+","+","+","-", 3,"/", 2]

  return (
    <div>
      {calculatorButtons.map((button, buttonKey) =>
      {
        return (
          <div key = { buttonKey }>
          <button onClick={() => setButtonSelection((selectedButtons) => [...selectedButtons, button])}>{button}</button>
          <button onClick={() => setCalculatorTotal(returnResult(selectedButtons))}>=</button>

          {/* <button onClick={() => returnResult(testNumber)}>=</button> */}

          <h1>Calculator Total is {calculatorTotal}</h1>
          <h1>Test number is {selectedButtons}</h1>
          <h1>Numbers are {selectedButtons}</h1>
          {/* <h1>Total is {selectedButtons.join()}</h1> */}
          </div>
        )
      })}
    </div>
  )
}

// function returnResult()  // got this working
// {
//   let testingNumber = [2, "+", 2]
//   let testNumber = evaluate(testingNumber.join(""))
//   console.log(testNumber)
//   return testNumber
// }

function returnResult(selectedButtons)  
{
  return evaluate(selectedButtons.join(""))
}



export default App


// import React, { useState } from "react";
// export default function App() {
//   const [arr, setArr] = useState(["foo"]);
//   return (
//     <div className="App">
//       <button onClick={() => setArr((oldArray) => [...oldArray, "foo"])}>
//         add
//       </button>
//       <div>
//         {arr.map((a, i) => (
//           <p key={i}>{a}</p>
//         ))}
//       </div>
//     </div>
//   );
// }