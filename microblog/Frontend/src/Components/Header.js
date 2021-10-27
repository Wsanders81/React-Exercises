import {Box, AppBar, Toolbar, Typography, Button} from '@mui/material'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <Box sx={{flexGrow: 1}} > 
        <AppBar  sx={{height: '15rem'}}>
            <Toolbar>
                <Box  sx={{marginTop: '4rem', paddingLeft: '2rem'}}>
                <Typography variant='h2'>
                    Microblog
                </Typography>
                <Box  sx={{display: 'flex', marginTop: '2rem'}}>
                    <Link style={{textDecoration: "none"}} to={'/'}>
                    <Button  variant="contained" color="secondary">Blog</Button>
                    </Link>
                    <Link style={{textDecoration: "none"}} to={'/new'}>
                    <Button sx={{marginLeft: '1rem'}}  variant="contained" color="secondary">Add a new post</Button>
                    </Link>
                </Box>
                </Box>
            </Toolbar>
        </AppBar>

        </Box>
    )
}