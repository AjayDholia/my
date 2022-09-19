import React from 'react'
import { useRef } from 'react'
import './technologies.css'




function Technologies({istrue}) {
  const inputfile = useRef(null);
  function handlefileUpload(){
    console.log("okkk h ye");
    inputfile.current.click()
  }
 
  return (
    
    <div className='technologies' >
        <div className='inputname'>
          <input type ='text' placeholder='Name' className='techinput'/>
        </div>
        <div className='file' onClick={()=>handlefileUpload()}  style={{border:"1px solid red"}}>
            <input type='file' className='techinput1' ref = {inputfile} style={{visibility:"hidden"}}/>

        </div>
        <div className='textbox'>
            <input type ='textbox' className='techinput2' placeholder='text Area'/>
        </div>
        <div>
            <span>status</span>
        </div>

    </div>
  )
}

export default Technologies