import React from 'react'
import {pojectlist} from '../database/ProjectData'
function Userdashboard() {
  return (
   pojectlist.map((e)=>{
    return(  <table>
        <tr>
            <th>Project Name</th>
            <th>last Time</th>
        </tr>
        <tr>
            <td>{e.name}</td>
            <td>{e.enddate}</td>
        </tr>
    </table>)
  

   })
   
  )
}

export default Userdashboard