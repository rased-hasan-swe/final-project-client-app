import React from 'react';
import { Card, Col } from 'react-bootstrap';


const ReviewData = (props) => {
    const {name,email,review,ratting}=props.review;
    return (
        <div>
            <Col id="card-data">
      <Card >
        
        <Card.Body>
          <Card.Title> Name: {name}</Card.Title>
          <Card.Title>Email: {email}</Card.Title>
          <Card.Text>
             review: {review}
          </Card.Text>
          <Card.Text>
          ratting: {ratting}
          </Card.Text>
          
        </Card.Body> 
      </Card>
    </Col>
        </div>
    );
};

export default ReviewData;