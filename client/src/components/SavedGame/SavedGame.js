import React, { Component } from 'react';
import SaveGame from './SavedItems';
import {
  Container, Row
} from 'reactstrap';

const SavedGame = props => {
  const save = props.item;
  let res;

  if (save.length > 0) {
    res = save.map(res => <SaveGame url={res} onClick={props.onClick} />);
  }

  return (
    <div>
      <Container>
        <h1>Saved Games</h1>
      </Container>
      <Container>
      <Row>{res}</Row>
      </Container>
    </div>
  );
  
};

export default SavedGame;