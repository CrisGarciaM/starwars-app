import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PlanetsCard from './PlanetsCard/PlanetsCard';
import ParentContainer from '../ParentContainer/ParentContainer';
import { fetchPlanets } from '../../redux/planets/planets-actions';
import { mainEndPoints } from '../../Api/endpoints';

const Planets = (props) => {
  const { fetchPlanets, planetsData } = props;
  const { planets, loading } = planetsData;

  useEffect(() => {
    fetchPlanets(mainEndPoints.planets);
  }, [fetchPlanets]);

  if (loading) {
    return <div className="w-100 text-center">Loading...</div>;
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
