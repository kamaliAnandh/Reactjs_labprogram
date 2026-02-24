import { useState } from 'react'
import './App.css'
function App() {
  const[num1,setNum1]=useState("");
  const[num2,setNum2]=useState("");

  const a=Number(num1);
  const b=Number(num2);


  
  return (
    <>
    <h1>Live Calculator</h1>
    <input type="number" value={num1} onChange={(e)=>setNum1(e.target.value)} />
    <input type="number" value={num2} onChange={(e)=>setNum2(e.target.value)} />
    <h2>Results</h2>
    <p>Addition:{a+b}</p>
    <p>Subtraction:{a-b}</p>
    <p>Multiply:{a*b}</p>
    <p>Division:{a/b}</p>
    
       
    </>
  )
}

export default App
