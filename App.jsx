import{useState,useEffect}from "react";
import './App.css'
function App() {
  const[greeting,setGreeting]=useState("");
  useEffect(()=>{
    const interval=setInterval(()=>{
      const now=new Date;
      const hours=String(now.getHours()).padStart(2,"0");
      const min=String(now.getMinutes()).padStart(2,"0");
      const sec=String(now.getSeconds()).padStart(2,"0");
      let msg="";
      if(hours<12)msg="Good morning";
      else if(hours<16)msg="Good afternoon";
      else if(hours<20)msg="Good Evening";
      else msg="Good night"
      setGreeting(`${msg}<br/> ${hours}:${min}:${sec}`);
},1000);
  },[]);
    
  

  return (
    <>
        <div>
          <h1 dangerouslySetInnerHTML={{__html:greeting }}></h1>
        </div>
    </>
  )
}

export default App
