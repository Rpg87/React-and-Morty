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
  const [filterType, setFilterType] = useState("");

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

  const handleType = (value) => {
    setFilterType(value);
  }

  const filteredNames = charactersData.filter((filter) =>
    filter.name.toLocaleLowerCase().includes(filtersName.toLowerCase())
  );

  const filteredType = charactersData.filter((filter) =>
    filter.type.toLocaleLowerCase().includes(filtersType.toLowerCase())
  );

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <main className="main">
              <Filters handleFilter={handleFilter} filtersName={filtersName} handleType={handleType} filterType={filterType} />
              <CharacterList charactersData={filteredNames} filteredType={filteredType}></CharacterList>
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
