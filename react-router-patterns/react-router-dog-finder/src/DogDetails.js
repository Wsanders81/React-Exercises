import {useParams, Redirect, Link} from 'react-router-dom'
const DogDetails = (dogs) => {

    const {name} = useParams()

    const dogArr = dogs.dogs.dogs
    const findDog = dogArr.filter((dogs) => {
        return dogs.name === name
    })
    
    const dog = findDog[0]
    if(!dog) {
        return <Redirect to="/dogs"/>
    }
    const dogFacts = dog.facts.map(fact => <p>{fact}</p>)
    return (
        <div>
            <h1>Doggy Detail Page</h1>
            <h4>Name: {dog.name}</h4>
            <h4> Age: {dog.age}</h4>
            <img src={dog.src} alt={dog.name}/>
            <h4>Fun Facts About {dog.name}</h4>
            
            {dogFacts}
            <Link to="/dogs">Go Back</Link>
        </div>
    )

}

export default DogDetails; 