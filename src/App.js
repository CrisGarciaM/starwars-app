import React, { useState } from 'react';
import Planets from './components/Planets/Planets';
import Characters from './components/Characters/Characters';
import OptionsInput from './components/OptionsInput/OptionsInput';
import StarShips from './components/Starships/Startships';
import './App.scss';
import Species from './components/Species/Species';

const App = () => {
  const [search, setSearch] = useState('');

  function handleChange(newState) {
    setSearch(newState);
  }

  return (
    <div className="main-app">
      <OptionsInput value={search} onChange={handleChange} />
      {search === 'planets' ? (
        <Planets />
      ) : search === 'people' ? (
        <Characters />
      ) : search === 'starships' ? (
        <StarShips />
      ) : search === 'species' ? (
        <Species />
      ) : (
        <Characters />
      )}
    </div>
  );
};

export default App;
