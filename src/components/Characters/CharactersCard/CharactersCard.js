import React from 'react';
import { Card } from 'semantic-ui-react';
import '../../../styles/commonStyles.scss';

const CharacterCard = (props) => {
  const {
    name,
    height,
    mass,
    haircolor,
    skincolor,
    eyeColor,
    birthYear,
    gender,
    id,
  } = props;
  return (
    <Card className="single-card" id={id}>
      <Card.Content>
        <Card.Header>Name: {name}</Card.Header>
        <Card.Meta>
          <span className="date">Date of Birth: {birthYear}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content>Height: {height}</Card.Content>
      <Card.Content>Mass: {mass}</Card.Content>
      <Card.Content>Hair color: {haircolor}</Card.Content>
      <Card.Content>Skin color: {skincolor}</Card.Content>
      <Card.Content>Eye color: {eyeColor}</Card.Content>
      <Card.Content>Gender: {gender}</Card.Content>
    </Card>
  );
};

export default CharacterCard;
