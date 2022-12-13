import { Link } from "react-router-dom";
const CharacterListCard = ({ eachChar }) => {



    return (
        <li className="charList__card" key={eachChar.id}>
            <Link className="charList__link" to={`/CharacterDetail/${eachChar.id}`}>
                <img src={eachChar.image} alt={eachChar.name} />
                <h2>{eachChar.name}</h2>
                <h3>{eachChar.species}</h3>
            </Link>
        </li>
    );
}

export default CharacterListCard;