import React, { Component } from 'react';
import Game from './GameItems';
import {
  Container,Row
} from 'reactstrap';

const Home = props => {
  const games = props.item;
  let res;

  if (games.length > 0) {
    res = games.map(res => <Game url={res} onClick={props.onClick} />);
  }

  return (
    <div>
      <Container>
        <h1>Latest Games</h1>
      </Container>
      <Container>
      <Row>{res}</Row>
      </Container>
    </div>
  );
  
};

export default Home;