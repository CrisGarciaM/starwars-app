import React from 'react';
import { Card } from 'semantic-ui-react';
import '../../../styles/commonStyles.scss';

const StarshipCard = (props) => {
  const {
    name,
    model,
    manufacturer,
    costInCredits,
    length,
    maxAtmospheringSpeed,
    crew,
    passengers,
    cargoCapacity,
    consumables,
    hyperdriveRating,
    mglt,
    starshipClass,
    id,
  } = props;

  return (
    <Card className="single-card" id={id}>
      <Card.Content>
        <Card.Header>Name: {name}</Card.Header>
        <Card.Meta>
          <span className="date">Model: {model}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content>Manufacturer: {manufacturer}</Card.Content>
      <Card.Content>Cost in credits: {costInCredits}</Card.Content>
      <Card.Content>Length: {length}</Card.Content>
      <Card.Content>
        Max atmosphering speed: {maxAtmospheringSpeed}
      </Card.Content>
      <Card.Content>Crew: {crew}</Card.Content>
      <Card.Content>Passengers: {passengers}</Card.Content>
      <Card.Content>Cargo capacity: {cargoCapacity}</Card.Content>
      <Card.Content>Consumables: {consumables}</Card.Content>
      <Card.Content>Hyper drive rating: {hyperdriveRating}</Card.Content>
      <Card.Content>Mglt: {mglt}</Card.Content>
      <Card.Content>Starship class: {starshipClass}</Card.Content>
    </Card>
  );
};

export default StarshipCard;
