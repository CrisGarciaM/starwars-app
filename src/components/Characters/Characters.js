import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ParentContainer from '../ParentContainer/ParentContainer';
import CharacterCard from './CharactersCard/CharactersCard';
import Heading from '../Heading/Heading';
import { fetchCharacters } from '../../redux/characters/characters-actions';
import { mainEndPoints } from '../../Api/endpoints';
import '../../styles/commonStyles.scss';
import PaginationContainer from '../Pagination/PaginationContainer';

const Characters = (props) => {
  const { fetchCharacters, charactersData } = props;
  const [page, setPage] = useState('1');
  const { characters, loading } = charactersData;

  useEffect(() => {
    fetchCharacters(mainEndPoints.characters);
  }, [fetchCharacters]);

  if (loading) {
    return <div className="w-100 text-center">Loading...</div>;
  }

  function handleClick(newState) {
    setPage(newState);
    fetchCharacters(mainEndPoints.characters + `?page=${newState}`);
  }

  return (
    <div>
      <Heading heading="Star Wars Characters" />
      <ParentContainer>
        {characters.results.map((singleCharacter) => {
          return (
            <CharacterCard
              key={singleCharacter.id}
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
      </ParentContainer>
      <div className="pagination-container">
        <PaginationContainer
          activePage={page}
          totalPages={9}
          ellipsisItem={null}
          onClick={handleClick}
        />
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
