import React, { useState } from 'react';
import Planets from './components/Planets/Planets';
import Characters from './components/Characters/Characters';
import OptionsInput from './components/OptionsInput/OptionsInput';
import StarShips from './components/Starships/Startships';
import './App.scss';
import Species from './components/Species/Species';
import Header from './components/Header/Header';

const App = () => {
  const [search, setSearch] = useState('');

  function handleChange(newState) {
    setSearch(newState);
  }

  return (
    <div className="main-app">
      <div className="main-header">
        <Header
          title={
            <a href="https://fontmeme.com/fonts/star-jedi-font/">
              <img
                src="https://fontmeme.com/permalink/210301/6c36c878e49730cfb15eb89d81a355a9.png"
                alt="star-jedi-font"
                border="0"
                className="header-img"
              ></img>
            </a>
          }
        />
      </div>
      <OptionsInput value={search} onChange={handleChange} />
      <div className="cards-container">
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
    </div>
  );
};

export default App;
