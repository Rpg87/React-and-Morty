import '../styles/App.scss';
import { useEffect, useState } from 'react';
import logo from '../images/logo_compr.png';
import callToApi from '../service/Api.js'
import CharacterList from './CharacterList.js';
import FiltersName from './FiltersName.js';




function App() {
  // VARIABLES ESTADO
  const [charactersData, setCharactersData] = useState([]);
  const [filtersName, setFiltersName] = useState('');

  // USEEFFECT 
  useEffect(() => {
    callToApi().then((cleanChar) => {
      setCharactersData(cleanChar);
    });
  }, []);


  // FUNCIONES HANDLER
  const handleFilter = (value) => {
    setFiltersName(value);
  };

  // FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR HTML

  // HTML EN EL RETURN

  return (
    <div className="App">
      <header> <img src={logo} alt="Rick and Morty" /></header>
      <main>
        <FiltersName handleFilter={handleFilter} filtersName={filtersName} />
        <CharacterList user={charactersData} ></CharacterList>

      </main>

      {/* Aquí va tu código HTML. */}
    </div>
  );
}

export default App;
