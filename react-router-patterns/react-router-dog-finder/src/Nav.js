import { NavLink } from 'react-router-dom'

const Nav = (dogs) => {
    const names = dogs.dogs.dogs.map(dog => dog.name)

    return (
    <ul>
        {names.map((dog) => {
            return (
                <li><NavLink key={dog} to ={`/dogs/${dog}`}> {dog} </NavLink></li>
            )
        })
}
    </ul>
    )
}

export default Nav; 