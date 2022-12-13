import { Link } from "react-router-dom";
const CharacterListCard = ({ eachChar }) => {



    return (
        <li key={eachChar.id}>
            <Link to={`/CharacterDetail/${eachChar.id}`}>
                <article>
                    <img src={eachChar.image} alt={eachChar.name} />
                    <h2>{eachChar.name}</h2>
                    <h3>{eachChar.species}</h3>
                </article>
            </Link>
        </li>
    );
}

export default CharacterListCard;