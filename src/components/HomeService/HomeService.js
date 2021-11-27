import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const HomeService = (props) => {
    const {img,name,_id,price,review}=props.service;
    return (
        <div>
                  <Col id="card-data">
      <Card >
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>Place:{name}</Card.Title>
          <Card.Title>rating:{review}</Card.Title>
          <Card.Text>
             Price: {price}$
          </Card.Text>
          <NavLink to={`/booking/${_id}`}>
          <Button  className="btn-pramery">Place to order </Button>
          </NavLink>
          
          
        </Card.Body> 
      </Card>
    </Col>
        </div>
    );
};

export default HomeService;