import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PlanetsCard from './PlanetsCard/PlanetsCard';
import ParentContainer from '../ParentContainer/ParentContainer';
import PaginationContainer from '../Pagination/PaginationContainer';
import { fetchPlanets } from '../../redux/planets/planets-actions';
import { mainEndPoints } from '../../Api/endpoints';

const Planets = (props) => {
  const { fetchPlanets, planetsData } = props;
  const { planets, loading } = planetsData;
  const [page, setPage] = useState('1');

  useEffect(() => {
    fetchPlanets(mainEndPoints.planets);
  }, [fetchPlanets]);

  if (loading) {
    return <div className="w-100 text-center">Loading...</div>;
  }

  function handleClick(newState) {
    setPage(newState);
    fetchPlanets(mainEndPoints.planets + `?page=${newState}`);
  }

  return (
    <div>
      <ParentContainer>
        {planets.results.map((singlePlanet) => {
          return (
            <PlanetsCard
              key={singlePlanet.id}
              id={singlePlanet.id}
              name={singlePlanet.name}
              terrain={singlePlanet.terrain}
              rotationPeriod={singlePlanet.rotation_period}
              orbitalPeriod={singlePlanet.orbital_period}
              diameter={singlePlanet.diameter}
              climate={singlePlanet.climate}
              gravity={singlePlanet.gravity}
              surfaceWater={singlePlanet.surface_water}
              population={singlePlanet.population}
            />
          );
        })}
      </ParentContainer>
      <div className="pagination-container">
        <PaginationContainer
          activePage={page}
          totalPages={6}
          ellipsisItem={null}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    planetsData: state.planetsState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlanets: (endpoint) => dispatch(fetchPlanets(endpoint)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Planets);
