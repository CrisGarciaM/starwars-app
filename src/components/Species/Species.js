import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ParentContainer from '../ParentContainer/ParentContainer';
import SpeciesCard from './SpeciesCard/SpeciesCard';
import PaginationContainer from '../Pagination/PaginationContainer';
import { fetchSpecies } from '../../redux/species/species-actions';
import { mainEndPoints } from '../../Api/endpoints';
import '../../styles/commonStyles.scss';

const Species = (props) => {
  const { fetchSpecies, speciesData } = props;
  const { species, loading } = speciesData;
  const [page, setPage] = useState('1');

  useEffect(() => {
    fetchSpecies(mainEndPoints.species);
  }, [fetchSpecies]);

  if (loading) {
    return <div className="w-100 text-center">Loading...</div>;
  }

  function handleClick(newState) {
    setPage(newState);
    fetchSpecies(mainEndPoints.species + `?page=${newState}`);
  }

  return (
    <div>
      <ParentContainer>
        {species.results.map((singleSpecie) => {
          return (
            <SpeciesCard
              key={singleSpecie.id}
              id={singleSpecie.id}
              name={singleSpecie.name}
              classification={singleSpecie.classification}
              designation={singleSpecie.designation}
              averageHeight={singleSpecie.average_height}
              skinColors={singleSpecie.skin_colors}
              hairColors={singleSpecie.hair_colors}
              eyeColors={singleSpecie.eye_colors}
              averageLifespan={singleSpecie.average_lifespan}
              language={singleSpecie.language}
            />
          );
        })}
      </ParentContainer>
      <div className="pagination-container">
        <PaginationContainer
          activePage={page}
          totalPages={4}
          ellipsisItem={null}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    speciesData: state.speciesState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSpecies: (endpoint) => dispatch(fetchSpecies(endpoint)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Species);
