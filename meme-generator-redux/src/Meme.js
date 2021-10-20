import {Button} from '@mui/material'
import './Meme.css'
export default function Meme({meme, remove}) {
    
    return (
        <>
        
        <div className="Meme-container">
            <div className="Meme-topText">
                <h1>{meme.topText.toUpperCase()}</h1>
            </div>
            <img src={meme.url} alt={meme.topText}/> 
            <div className="Meme-bottomText">
                <h1>{meme.bottomText.toUpperCase()}</h1>
            </div>
            <div>
                
            <Button onClick={()=> remove(meme.id)}  variant="outlined" color="error">Delete</Button>
            </div>
        </div>
            
            </>
    )
}