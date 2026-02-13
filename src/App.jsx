import axios  from "axios"
import './App.css'
import { useEffect, useState } from "react"
// AXIOS PACKEAGE


function App() {
  let [apidata,setapidata]=useState([])

 useEffect(()=>{
  axios.get('https://jsonplaceholder.typicode.com/comments')
  .then((res)=>setapidata(res.data))

 },[])

  return (
    <>
      <table border="" bgcolor="naviblue">
        
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>body</th>
          </tr>
        
      
          {apidata.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.body}</td>
            </tr>
          ))}
        
      </table>
    </>

  )
}

export default App
