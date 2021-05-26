import Pet from "./Pet"

const Results = (props) => {
    return(
        <div className="search">
            {!props.pets.length ? (
                <h2>No pets found</h2>
            ) : (
                props.pets.map(pet => (
                    <Pet
                        animal={pet.animal}
                        key={pet.id}
                        name={pet.name}
                        breed={pet.breed}
                        images={pet.images}
                        location={`${pet.city}, ${pet.state}`}
                        id={pet.id}
                    />
                ))
            )}
        </div>
    )
}

export default Results