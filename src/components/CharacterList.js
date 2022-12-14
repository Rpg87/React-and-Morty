import "../styles/components/CharacterList.scss";
import CharacterListCard from "./CharacterListCard";
import look from "../images/look.jpg";

const CharacterList = ({ charactersData }) => {
    const sortedList = charactersData;
    sortedList.sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0));

    const AllChars = charactersData.map((eachChar) => {
        return <CharacterListCard key={eachChar.id} eachChar={eachChar} />;
    });

    const dontFound = (
        <div className="message">
            <img
                className="message__img"
                src={look}
                alt="Rick y Morty buscan contigo"
            />
            <div className="messageError">
                <h3 className="messageError__h3">¿Tú lo ves? </h3>
                <p className="messageError__text">
                    ¡NOSOTROS NO! El universo está lleno de vagos, mejor busquemos de
                    nuevo.
                </p>
            </div>
        </div>
    );

    return (
        <section className="sectionList">
            <ul className="charList">
                {AllChars.length === 0 ? dontFound : AllChars}
            </ul>
        </section>
    );
};
export default CharacterList;
