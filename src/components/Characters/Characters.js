import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CharacterCard from './CharactersCard/CharactersCard';
import { fetchCharacters } from '../../redux/characters/characters-actions';
import { mainEndPoints } from '../../Api/endpoints';
import PaginationContainer from '../Pagination/Pagination';
import './Characters.scss';

const Characters = (props) => {
  const { fetchCharacters, charactersData } = props;
  const { characters } = charactersData;

  useEffect(() => {
    fetchCharacters(mainEndPoints.characters);
  }, [fetchCharacters]);

  if (charactersData.loading) {
    return <div className="w-100 text-center">Loading...</div>;
  }

  console.log(characters);
  // console.log(charactersData.characters.results);

  return (
    <div>
      <div className="characters-container">
        {characters.results.map((singleCharacter, index) => {
          return (
            <CharacterCard
              key={index}
              id={singleCharacter.id}
              name={singleCharacter.name}
              height={singleCharacter.height}
              haircolor={singleCharacter.hair_color}
              mass={singleCharacter.mass}
              skincolor={singleCharacter.skin_color}
              eyeColor={singleCharacter.eye_color}
              gender={singleCharacter.gender}
              birthYear={singleCharacter.birth_year}
            />
          );
        })}
      </div>
      <div>
        <PaginationContainer />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    charactersData: state.charactersState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCharacters: (endpoint) => dispatch(fetchCharacters(endpoint)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Characters);
