import React from 'react';
import './ParentContainer.scss';

const ParentContainer = (props) => {
  return <div className="parent-container">{props.children}</div>;
};

export default ParentContainer;
