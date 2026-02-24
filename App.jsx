import { BrowserRouter,Route,Contact,Routes} from'react-router-dom'
import './App.css'
import Home from './Home'
import About from './About'
import Navbar from './Navbar'
import Contact from './Contact'

function App() {
   return (
    <>
      <h1>Navbar</h1>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/'element={<About/>}/>
        <Route path='/'element={<Contact/>}/>
        

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
