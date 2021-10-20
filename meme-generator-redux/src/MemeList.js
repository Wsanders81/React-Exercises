
import {Box} from '@mui/material'
import Meme from './Meme'
import "./MemeList.css"
export default function MemeList({memes, remove}) {
    

    return (
        <div className="MemesList">
        {memes.map(m => {
           return (
                <Meme meme={m} remove={remove} key={m.id}/>
           )
        })}
        </div>
    )
}