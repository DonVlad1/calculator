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

const App = () => 
{
  const [calculatorButtons, setCalculatorButtons] = useState([0,1,2,3,4,5,6,7,8,9,"+","-","="])

  // state = {
  //   calculatorButtons: [0,1,2,3,4,5,6,7,8,9,"+","-","="]

  return (
    <div>
      {calculatorButtons.map((button, buttonKey) =>
      {
        return <h1 key = { buttonKey }>The button is {button}</h1>
      })}
    </div>
  )
}
export default App