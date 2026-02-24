import { useEffect, useState } from 'react'

import './App.css'

 function App() {
   const[greeting , setGreeting] = useState("");
 
  useEffect(()=>{
    const interval = setInterval(()=>{
      const now = new Date();
      const hour = String(now.getHours()).padStart(2,"0");
      const min = String(now.getMinutes()).padStart(2,"0");
      const sec = String(now.getSeconds()).padStart(2,"0");

      let msg = ""
      if (hour < 12) msg = "good morning";
      else if(hour < 16) msg = "good afternoon"
      else if(hour <19)  msg = "good evening"
      else msg = "good night"

      setGreeting(`${msg} <br/> ${hour} : ${min} : ${sec}`);

    },1000);

  

  return (
    <>
      <h1>digital clock</h1>
      <div>
        <h1 dangerouslySetInnerHTML={{__html :greeting}}></h1>
      </div>
    </>
  )
}
export default App
