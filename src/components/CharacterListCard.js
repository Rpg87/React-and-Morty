import { Link } from "react-router-dom";
const CharacterListCard = ({ eachChar }) => {
    return (
        <li className="charList__card" key={eachChar.id}>
            <Link className="charList__link" to={`/CharacterDetail/${eachChar.id}`}>
                <img
                    className="charList__link--img"
                    src={eachChar.image}
                    alt={eachChar.name}
                />
                <h2 className="charList__link--detail">{eachChar.name}</h2>
                <h3 className="charList__link--detail">{eachChar.species}</h3>
            </Link>
        </li>
    );
};

export default CharacterListCard;
