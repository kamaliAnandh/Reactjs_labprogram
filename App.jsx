import { useEffect ,useState} from 'react'
import './App.css'
function App() {
  const[users,setUsers]=useState([])

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then((data)=>setUsers(data));
  },[])
  return (
    <>
     <h1>Mapped users</h1>
     {
      users.map((user)=>(
        <div>
          <h1>Name:{user.name}</h1>
          <h2>Email:{user.email}</h2>
          <h2>Phone:{user.phone}</h2>
          <h2>Website:{user.website}</h2>
          
          
        </div>
      ))
     } 
    </>
  )
}

export default App
