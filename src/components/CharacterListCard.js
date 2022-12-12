const CharacterListCard = ({ eachChar }) => {


    return (
        <li key={eachChar.id}>
            <article>
                <img src={eachChar.image} alt={eachChar.name} />
                <h2>{eachChar.name}</h2>
                <h3>{eachChar.species}</h3>
            </article>
        </li>
    );
}

export default CharacterListCard;