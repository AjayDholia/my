import React from 'react'
import Box from '@mui/material/Box';
import {useState} from 'react'
import Project from './Project';
import Technologies from './Technologies'
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { fabClasses } from '@mui/material';
 
function Allcomponents() {
    const[technologydisplay,setTechnologydisplay] = useState(false)
    const[displayproject,setDisplayproject] = useState(false)
    
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    console.log("chal rha h ");
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <div>
     
<Popover 
id={id}
open={open}
anchorEl={anchorEl}
onClose={handleClose}
  anchorOrigin={{
    vertical: 'center',
    horizontal: 'center',
  }}
  transformOrigin={{
    vertical: 'center',
    horizontal: 'center',
  }}
>
<Box
      sx={{
        width: 300,
        height: 300,
      }}
      > 
      {
        technologydisplay===true?
        <Technologies/>
        : null
      }
       {
        displayproject===true?
        <Project/>
        : null
      }

</Box>
</Popover>

<Button aria-describedby={id} variant="contained" onClick={(e)=>{
setTechnologydisplay(true)
setDisplayproject(false)
handleClick(e)} } sx={{width:'15%'}}>
        Add Technology
      </Button>
      <Button aria-describedby={"name"} variant="contained" onClick={(e)=>{handleClick(e) 
setTechnologydisplay(false)
setDisplayproject(true)} } sx={{width:'15%'}}>
        Add Project
      </Button>

    </div>
  )
}

export default Allcomponents