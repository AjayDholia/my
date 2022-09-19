import React, {useState} from 'react';
import './project.css'
import Box from '@mui/material/Box';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { fabClasses } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
	'javaScript',
	'html',
	'CSS',
	'React',
	'Angular',
	'Andriod',
	'TypeScript',
	'SQL',
	'Mongodb',
	'Express',
  ];
  function getStyles(name, personName, theme) {
	return {
	  fontWeight:
		personName.indexOf(name) === -1
		  ? theme.typography.fontWeightRegular
		  : theme.typography.fontWeightMedium,
	};
  }
function Project(){
	const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
	const [selectedFile, setSelectedFile] = useState();
	const [isSelected, setIsSelected] = useState(false);


	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
	  console.log("chal rha h ");
	  setAnchorEl(event.currentTarget);
	};
  
	const handleClose = () => {
	  setAnchorEl(null);
	};
  
	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsSelected(true);
	}
	return(
   <div className='projectmain'>
	
<Popover 
id={id}
open={open}
anchorEl={anchorEl}
onClose={handleClose}
anchorReference="anchorPosition"
anchorPosition={{ top: 150, left: 760 }}
anchorOrigin={{
  vertical: 'top',
  horizontal: 'right',
}}
transformOrigin={{
  vertical: 'top',
  horizontal: 'right',
}}
>
<Box
     
      sx={{
           width: '100%',height:"100%",
		   display:'flex',
		   flexDirection:"column"
      }}
   
    >
	  <TextField id="outlined-basic" label="Name" variant="outlined" />
	  <TextField  label="email" variant="outlined" type="email"
	   id="outlined-required" />

</Box>

</Popover>
        <div className='requiremtns'>
         <h3>Requirements</h3>
        </div>
        <div className='timeline'>
        <label for="stardate">StartDate:</label>
   <input type="date" id="Startdate" name="startdate"/>
       </div>
       <div className='timeline'>
       <label for="enddate">EndDate:</label>
  <input type="date" id="enddate" name="enddate"/>
        </div>
   <div className='filedocument'>
   {/* <label for='file'>Document:</label> */}
			<input type="file" name="file" className='addfile' onChange={changeHandler} />
   </div>
			{isSelected ? (
				<div>
					<p>Filename: {selectedFile.name}</p>
					<p>Filetype: {selectedFile.type}</p>
					<p>Size in bytes: {selectedFile.size}</p>
					<p>
						lastModifiedDate:{' '}
						{selectedFile.lastModifiedDate.toLocaleDateString()}
					</p>
				</div>
			) : null
      }
      <div className='addmember'>
			<div>
			<Button aria-describedby={id} variant="contained" sx={{fontSize:"9px",marginLeft:"26%",marginTop:"3%"}} onClick={(e)=>{
handleClick(e)}}  >
        Add Member
      </Button>
			</div>
			</div>
			<FormControl sx={{ marginLeft:"25%", marginTop:"3%", width: "30%",height:"3%" }}>
        <InputLabel id="demo-multiple-name-label" sx={{}}>Technology</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
	    
		</div>
	)
      }
export default Project