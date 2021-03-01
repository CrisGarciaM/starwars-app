import React from 'react';
import { Card } from 'semantic-ui-react';
import '../../../styles/commonStyles.scss';

const SpeciesCard = (props) => {
  const {
    name,
    classification,
    designation,
    averageHeight,
    skinColors,
    hairColors,
    eyeColors,
    averageLifespan,
    language,
    id,
  } = props;

  return (
    <Card className="single-card" id={id}>
      <Card.Content>
        <Card.Header>Name: {name}</Card.Header>
        <Card.Meta>
          <span className="date">Classification: {classification}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content>Designation: {designation}</Card.Content>
      <Card.Content>Average height: {averageHeight}</Card.Content>
      <Card.Content>Skin colors: {skinColors}</Card.Content>
      <Card.Content>Hair colors: {hairColors}</Card.Content>
      <Card.Content>Eye colors: {eyeColors}</Card.Content>
      <Card.Content>Average lifespan: {averageLifespan}</Card.Content>
      <Card.Content>Language: {language}</Card.Content>
    </Card>
  );
};

export default SpeciesCard;
