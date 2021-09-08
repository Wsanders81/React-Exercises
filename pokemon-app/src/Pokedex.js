import PokeCard from "./PokeCard"
import "./Pokedex.css"
const Pokedex = (props) => {
    console.log(props.base_experience)
    return  (
        <div className="Pokedex">
            <div className="Pokedex-cards">
                {props.pokemon.map(p => (
                    <PokeCard key={p.id} id={p.id} name={p.name} type={p.type} base_experience = {p.base_experience}/>
                ))}
            </div>

        </div>
    )
}




export default Pokedex