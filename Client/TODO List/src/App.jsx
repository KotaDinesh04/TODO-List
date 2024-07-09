import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup'
import Home from './Components/Home'

function App() {
  const [flag,setFlag] = useState(false);
  const [homeFlag, setHomeFlag] = useState(false);  
  return (
    <>
      {flag ? <Signup flag = {flag} setFlag={setFlag}/> : <Login flag = {flag} setFlag={setFlag} homeFlag = {homeFlag} setHomeFlag = {setHomeFlag}/>}
    </>
  )
}

export default App
