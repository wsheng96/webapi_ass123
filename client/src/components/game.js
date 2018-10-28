import React from 'react';
import {
  Container, Row, Col,
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardFooter
} from 'reactstrap';

const Game = props => {
  function handleSubmit() {
    props.onClick({
      title: props.url.title,
      link: props.url.link,
      image: props.url.image,
      releaseDate: props.url.releaseDate,
      OriginalPrice: props.url.OriginalPrice,
      ratings: props.url.ratings
    });
  }

  return (
    <Container>
      <Row>
        <Col xs="6">
    <Card id="size">
    <CardImg top width="100%" src={props.url.image} alt="Card image cap" />
  <CardBody>
    <CardTitle>{props.url.title}</CardTitle>
    <CardSubtitle id="Link">{props.url.link}</CardSubtitle>
    <CardText id="Release Date">{props.url.releaseDate}</CardText>
    <CardText id="Original Price">{props.url.OriginalPrice}</CardText>
    <CardText id="Rating">{props.url.ratings}</CardText>
  </CardBody>
  <CardFooter>
    <Button id="save_btn"onClick={handleSubmit}>Save</Button>
    <Button id="read-btn" href={props.url.link} target="_blank">Read More</Button>
  </CardFooter>
  </Card>
  </Col>
  </Row>
  </Container>
  );
};

export default Game;