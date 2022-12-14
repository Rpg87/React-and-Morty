import { Link } from "react-router-dom";
import "../styles/components/PageNotFound.scss";

const PageNotFound = () => {
    return (
        <div className="warning">
            <h1 className="warning__text">
                Has querido volar demasiado alto y te has perdido.
            </h1>
            <h2 className="warning__text">
                NO PASADA NADA, NUNCA DEJES DE INTENTARLO
            </h2>
            <Link to="/" className="warning__link">
                {" "}
                Vuelve a casa
            </Link>
            <img
                src="https://assets.codepen.io/1538474/astronaut.svg"
                className="astronaut"
            />
        </div>
    );
};

export default PageNotFound;
