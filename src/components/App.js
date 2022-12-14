import "../styles/App.scss";
import { useEffect, useState } from "react";

import callToApi from "../service/Api.js";
import CharacterList from "./CharacterList.js";

import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import { Routes, Route } from "react-router-dom";
import Header from "./Header.js";
import PageNotFound from "./PageNotFound";

function App() {
  const [charactersData, setCharactersData] = useState([]);
  const [filtersName, setFiltersName] = useState("");

  // USEEFFECT
  useEffect(() => {
    callToApi().then((cleanChar) => {
      setCharactersData(cleanChar);
    });
  }, []);

  //FUNCIONES PARA ROUTER
  const findCharDetail = (id) => {
    return charactersData.find((oneChar) => oneChar.id === parseInt(id));
  };

  const handleFilter = (value) => {
    setFiltersName(value);
  };

  const filteredNames = charactersData.filter((filter) =>
    filter.name.toLocaleLowerCase().includes(filtersName.toLowerCase())
  );

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <main className="main">
              <Filters handleFilter={handleFilter} filtersName={filtersName} />
              <CharacterList charactersData={filteredNames}></CharacterList>
            </main>
          }
        />
        <Route
          path="/CharacterDetail/:id"
          element={<CharacterDetail findCharDetail={findCharDetail} />}
        />
        <Route path="/PageNotFound" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
