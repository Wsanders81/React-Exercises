
import './PokeCard.css'
const POKEMON_API = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`

const PokeCard = (props) => {
    const img = POKEMON_API + `${props.id}.png`
    return (
        <div className="PokeCard">
            <h3 className="PokeCard-header">
                {props.name}
            </h3>
            <img src={img} alt="Pokemon"/>
            <p className="PokeCard-type">Type: {props.type}</p>
            <p className="PokeCard-experience">Exp: {props.base_experience}</p>
        </div>
    )


}







export default PokeCard