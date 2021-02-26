import React from 'react';
import { Card } from 'semantic-ui-react';
import '../../../styles/commonStyles.scss';

const PlanetsCard = (props) => {
  const {
    name,
    rotationPeriod,
    orbitalPeriod,
    diameter,
    climate,
    gravity,
    terrain,
    surfaceWater,
    population,
    id,
  } = props;

  return (
    <Card className="single-card" id={id}>
      <Card.Content>
        <Card.Header>Name: {name}</Card.Header>
        <Card.Meta>
          <span className="date">Terrain: {terrain}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content>Rotation Period: {rotationPeriod}</Card.Content>
      <Card.Content>Orbital Period: {orbitalPeriod}</Card.Content>
      <Card.Content>Diameter: {diameter}</Card.Content>
      <Card.Content>Climate: {climate}</Card.Content>
      <Card.Content>Gravity: {gravity}</Card.Content>
      <Card.Content>Surface Water: {surfaceWater}</Card.Content>
      <Card.Content>Population: {population}</Card.Content>
    </Card>
  );
};

export default PlanetsCard;
