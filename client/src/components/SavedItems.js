import React, { Component } from 'react';
import {
  Container, Row, Col,
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardFooter
} from 'reactstrap';

import {
  Fa,CardImage,Button
} from 'mdbreact';

const SavedItems = props =>{

  function handleSubmit(){
    props.onClick({
      title: props.url.title,
    });
  }

  return(
  
    <Col sm="6">
      <Card id="save-size">
        <CardImage top src={props.url.image} overlay="white-slight" hover waves alt={props.url.title}/>
        <CardBody>
          <CardTitle>{props.url.title}</CardTitle>
          <hr />
          <CardText>{props.url.link}</CardText>
        </CardBody>
        <CardFooter>
          <Button className="btn-circle btn-xl float-left" id="btn-prime"  onClick={handleSubmit}><Fa className="fa-lg" icon="trash"/></Button>
          <a href={props.item.url} target="_blank" className="black-text d-flex justify-content-end" id="read-more"><h5>Read more <Fa icon="angle-double-right"></Fa></h5></a>
        </CardFooter>
      </Card>
    <br/>
  </Col>
  );
};

export default SavedItems;