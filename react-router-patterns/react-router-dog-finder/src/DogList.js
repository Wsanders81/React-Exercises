import {Link} from 'react-router-dom'



const DogList = (dogs) => {
    const dogArr = dogs.dogs.dogs
    return (
        <div>
            <h1>List of Dogs</h1>
            {dogArr.map((dog) => {
                return (
                    <div>
                        <Link to={`/dogs/${dog.name}`}>
                       <h4>{dog.name}</h4>
                       <img src={dog.src} alt={dog.name}/>
                       </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default DogList; 