
import {Box, Typography, Button} from '@mui/material'
import '../Styles/Comment.css'
export default function Comment({comment, deleteComment})  {
    return (
        <Box className="Comment" sx={{marginLeft:'1.75rem', marginTop: '1rem', display: "flex"}}>
            <Button color='error' onClick={()=>deleteComment(comment.id)}>X</Button>
            <Typography ml={4}>
                {comment.text}
            </Typography>
        </Box>
    )

}