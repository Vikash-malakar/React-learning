import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
//  useEffect(()=>alert("woring......"),)
//  useEffect(()=>alert("woring......"),[])
let[color,setcolor]=useState()

 useEffect(()=>alert("woring......"),[color])


  return (
    <>
     <button onClick={()=>setcolor('red')}> red </button>
    </>
  )
}

export default App
