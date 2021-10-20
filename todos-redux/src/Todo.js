import {Box,  Paper, Typography, Button } from '@mui/material';
export default function Todo({ text, remove }) {
    console.log(text.todo)
	return (
        <Box >
		<Paper
			elevation={3}
			style={{
				width     : '75%',
				margin    : 'auto',
				marginTop : '1rem',
				height    : '3rem'
			}}
		>
			<Typography align="left" sx={{paddingTop: '.75rem', marginLeft: '1rem'}} variant="body1">
                {text.todo}
                <Button onClick={()=>remove(text.id)} variant="outlined" color="error" style={{float:"right"}}>
                    Delete
                </Button>
                </Typography>
		</Paper>
            
        </Box>
	);
}
