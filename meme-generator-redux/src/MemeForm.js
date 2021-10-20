import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import {Box, TextField, Button} from '@mui/material'
import './MemeForm.css'
const INITIAL_STATE = {
    url: "", 
    topText: "", 
    bottomText: ""
}

export default function MemeForm({addMeme}) {
    const [data, setData] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        const { name, value } = e.target; 
        setData(data => ({...data, [name]: value}))
    }
    const handleSubmit = (e) => {
        e.preventDefault(); 
        addMeme({...data, id: uuidv4()})
        setData(INITIAL_STATE)

    }

    return (
        <Box sx={{width: '50%', margin: 'auto'}} >
            <form className="MemeForm" onSubmit={handleSubmit} style={{display: "flex", flexDirection:'column'}}>
            <TextField  style={{marginBottom: '1rem'}} id="url" name="url" label="url" variant="outlined" value={data.url} onChange={handleChange}/>
            <TextField style={{marginBottom: '1rem'}} id="topText" name="topText" label="Top Text" variant="outlined" value={data.topText} onChange={handleChange}/>
            <TextField style={{marginBottom: '1rem'}} id="bottomText" name="bottomText" label="Bottom Text" variant="outlined" value={data.bottomText} onChange={handleChange}/>
            <Button variant="outlined" type="submit">Submit</Button>
            </form>
        </Box>
    )
}