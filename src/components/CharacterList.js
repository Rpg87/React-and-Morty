import CharacterListCard from './CharacterListCard';

const CharacterList = ({ user }) => {
    const AllChars = user.map((eachChar) => {
        return <CharacterListCard eachChar={eachChar} />;
    });
    return (
        <section>
            <ul>{AllChars}</ul>
        </section>
    )
}
export default CharacterList;