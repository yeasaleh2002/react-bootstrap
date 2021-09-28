import React from 'react';
import { Card, Col } from 'react-bootstrap';

const UpdateNews = (props) => {

    const {title, description, urlToImage} = props.updatenewS;

    return (
        <Col>
        <Card>
          <Card.Img variant="top" src={urlToImage} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>     
            <Card.Text>
             {description} </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default UpdateNews;