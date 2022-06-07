import React from "react";
import { Card, Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import { SingleProductProps } from "../../utils/types/landingpage";


const Details = ({ product }: { product: SingleProductProps[] }) => {
  
  let images = product["img"];
  let simage = images[0].media;

  return (
  <Container>
        <Row>
        <Col>
          <Image src={`http://localhost:8000${simage}`} fluid />
        </Col>
        <Col md={6}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3> {product["name"]} </h3>
            </ListGroup.Item>
            <ListGroup.Item>Price : BDT{product["price"]}</ListGroup.Item>
            <ListGroup.Item>
              Description : {product["description"]}
            </ListGroup.Item>
            <ListGroup.Item>
              Brand : {product["brand"]}
            </ListGroup.Item>
            <ListGroup.Item>
              Color : {product["color"]}
            </ListGroup.Item>
            <ListGroup.Item>
              Size : {product["size"]}
            </ListGroup.Item>
          </ListGroup>
        </Col> 
        <Col md={6}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>BDT{product["price"]}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
           </ListGroup>
          </Card>
        </Col>
      </Row>
  </Container>
  );
};

export default Details;