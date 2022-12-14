import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/components/CharacterDetail.scss";
import { RiAliensFill } from "react-icons/ri";

import { GiChoppedSkull, GiHeartBeats, GiCharacter } from "react-icons/gi";
import PageNotFound from "./PageNotFound";

const CharacterDetail = (props) => {
    const params = useParams();

    const charFound = props.findCharDetail(params.id);

    const renderSpecies = () => {
        if (charFound.species === "Alien") {
            return <RiAliensFill className="alien" />;
        } else {
            return <GiCharacter className="human" />;
        }
    };
    const renderStatus = () => {
        if (charFound.status === "Alive") {
            return <GiHeartBeats className="alive" />;
        } else if (charFound.status === "Dead") {
            return <GiChoppedSkull className="skull" />;
        }
    };

    if (charFound === undefined) {
        return <PageNotFound />;
    } else {
        return (
            <section className="section">
                <Link className="link" to="/">
                    Volver
                </Link>
                <ul className="detail">
                    <li className="detail__card" key={charFound.id}>
                        <img
                            className="detail__img"
                            src={charFound.image}
                            alt={charFound.name}
                        />
                        <h2 className="detail__name">{charFound.name}</h2>
                        <h3 className="detail__rest">
                            {" "}
                            <span className="detail__rest--extra"> Status: </span>{" "}
                            {charFound.status} {renderStatus()}
                        </h3>
                        <h3 className="detail__rest">
                            {" "}
                            <span className="detail__rest--extra">Species:</span>{" "}
                            {charFound.species} {renderSpecies()}
                        </h3>
                        <h3 className="detail__rest">
                            {" "}
                            <span className="detail__rest--extra">Origin:</span>{" "}
                            {charFound.origin}{" "}
                        </h3>
                        <h3 className="detail__rest">
                            {" "}
                            <span className="detail__rest--extra">Episodes:</span>{" "}
                            {charFound.episode}
                        </h3>
                    </li>
                </ul>
            </section>
        );
    }
};

export default CharacterDetail;
