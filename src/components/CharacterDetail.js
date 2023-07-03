import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


const CharacterDetail = (props) => {
    const params = useParams();

    const charFound = props.findCharDetail(params.id);
    console.log(charFound);

    return (
        <li key={charFound.id}>
            <article>
                <img src={charFound.image} alt={charFound.name} />
                <h2>{charFound.name}</h2>
                <h3> Species: {charFound.species} </h3>
                <h3> Origin: {charFound.origin} </h3>
                <h3> Episodes: {charFound.episode}</h3>
            </article>
            <Link to='/'>Volver</Link>
        </li>
    )
};

export default CharacterDetail;