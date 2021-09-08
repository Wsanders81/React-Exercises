import React, {useState} from 'react'
import "./EightBall.css"
const EightBall = (props) => {
    const [msg, setMsg] = useState("Think of a Question")
    const [color, setColor] = useState('black')
    const genRandomAnswer = () => {
        const randNum = Math.floor(Math.random()*props.answers.length)
        setMsg(props.answers[randNum].msg)
        setColor(props.answers[randNum].color)
        console.log(props.answers)
    }
    return (
        <div className="EightBall" onClick={genRandomAnswer} >
            <div className="EightBall-message" style={{color: color}}><span >{msg}</span></div>
        </div>
    )
} 





export default EightBall