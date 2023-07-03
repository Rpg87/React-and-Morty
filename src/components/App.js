import '../styles/App.scss';
import { useEffect, useState } from 'react';

import callToApi from '../service/Api.js'
import CharacterList from './CharacterList.js';
import FiltersName from './FiltersName.js';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './Header.js';




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

  //FUNCIONES PARA ROUTER
  const findCharDetail = (id) => {
    return charactersData.find((oneChar) => oneChar.id === parseInt(id));
  }


  // FUNCIONES HANDLER
  const handleFilter = (value) => {
    setFiltersName(value);
  };

  // FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR HTML

  const filteredNames = charactersData.filter((filter) => filter.name.toLocaleLowerCase().includes(filtersName.toLowerCase()));

  // HTML EN EL RETURN

  return (
    <div className="App">
      <Header />


      <Routes>
        <Route path='/' element={
          <main>
            <Filters handleFilter={handleFilter} filtersName={filtersName} />
            <CharacterList charactersData={filteredNames}  ></CharacterList>
          </main>
        }
        />
        <Route path='/CharacterDetail/:id' element={<CharacterDetail findCharDetail={findCharDetail} />}

        />
      </Routes>

      {/* Aquí va tu código HTML. */}
    </div>
  );
}

export default App;
