import { useState } from "react";
import {TextField, Box, Button} from '@mui/material'
import {v4 as uuid4} from 'uuid'
const INITIAL_STATE = {
    todo: ""
}
export default function TodoForm({addTodo}) {
 const [form , setForm ] = useState(INITIAL_STATE)
 const handleChange = (e) => {
     const {name, value } = e.target
     setForm(data => ({...data, [name]: value}))
 }
 const handleSubmit = (e) => {
     e.preventDefault()
     addTodo({...form, id: uuid4() })
     setForm(INITIAL_STATE)
 }
 return (
     <Box sx={{width: '50%', margin: 'auto'}} >
         <form  onSubmit={handleSubmit} style={{display: "flex", flexDirection:'column'}}>
            <TextField  style={{marginBottom: '1rem'}} id="todo" name="todo" label="Todo" variant="outlined" value={form.todo} onChange={handleChange}/>
            <Button variant="outlined" type="submit">Submit</Button>
            </form>
     </Box>
 )
}