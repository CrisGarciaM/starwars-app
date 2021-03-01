import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ParentContainer from '../ParentContainer/ParentContainer';
import StarshipCard from './StarshipsCard/StarshipsCard';
import PaginationContainer from '../Pagination/PaginationContainer';
import { fetchStarships } from '../../redux/starships/starships-action';
import { mainEndPoints } from '../../Api/endpoints';
import '../../styles/commonStyles.scss';

const Starships = (props) => {
  const { fetchStarships, starshipsData } = props;
  const { starships, loading } = starshipsData;
  const [page, setPage] = useState('1');

  useEffect(() => {
    fetchStarships(mainEndPoints.starShips);
  }, [fetchStarships]);

  if (loading) {
    return <div className="w-100 text-center">Loading...</div>;
  }

  function handleClick(newState) {
    setPage(newState);
    fetchStarships(mainEndPoints.starShips + `?page=${newState}`);
  }

  return (
    <div>
      <ParentContainer>
        {starships.results.map((singleStarship) => {
          return (
            <StarshipCard
              key={singleStarship.id}
              model={singleStarship.model}
              id={singleStarship.id}
              name={singleStarship.name}
              manufacturer={singleStarship.manufacturer}
              costInCredits={singleStarship.cost_in_credits}
              length={singleStarship.length}
              maxAtmospheringSpeed={singleStarship.max_atmosphering_speed}
              crew={singleStarship.crew}
              passengers={singleStarship.passengers}
              cargoCapacity={singleStarship.cargo_capacity}
              consumables={singleStarship.consumables}
              hyperdriveRating={singleStarship.hyperdrive_rating}
              mglt={singleStarship.mglt}
              starshipClass={singleStarship.starship_class}
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
    starshipsData: state.starshipsState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStarships: (endpoint) => dispatch(fetchStarships(endpoint)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Starships);
