import React from 'react'
import './ProductManageForm.css'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const ProductManageForm = () => {
 
 
 const topitems = [
    {label:'food'},
    {label:'vegetable'},
 ];
 
 
 
 
    return (
    <div>
        <Typography variant="h5" gutterBottom style={{fontSize:'38px' , fontfamily:'comfortea,sans-serif'}} component="div">
        ProductManage
        </Typography>
    
        <div>
         <TextField id="basic-field" label="Title" variant= "filled" style={{width:'56vh'}} className='text1' />
         <TextField id="basic-field" label="Title" variant= "filled" style={{width:'56vh'}} className='text2' />
        </div>
    
      
        <div>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Movie" />}
          />
        </div>

        <div>
        <TextareaAutosize
          disablePortal
          id="combo-box-demo"
          placeholder='Description'
          style={{ width: '56vh', height:'19vh'}}
          className='textarea'
          />
        </div>
       
       <div>
       <Button variant="contained" style={{width:'14vh', left:'140vh' , top:'229px'}} className='buttonone' color='success'>Save</Button>
       <Button variant="contained" style={{width:'14vh', top:'229px'}} className='buttontwo'>Cancel</Button>
       </div>
    
    
    </div>

   
  )
}

export default ProductManageForm