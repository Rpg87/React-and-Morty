import CharacterListCard from './CharacterListCard';

const CharacterList = ({ charactersData }) => {
    const AllChars = charactersData.map((eachChar) => {
        return <CharacterListCard key={eachChar.id} eachChar={eachChar} />;
    });
    return (
        <section>
            <ul>{AllChars}</ul>
        </section>
    )
}
export default CharacterList;