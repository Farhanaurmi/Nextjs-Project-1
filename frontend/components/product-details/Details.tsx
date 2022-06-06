import React from "react";
import { Card, Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import { SingleProductProps } from "../../utils/types/landingpage";


const Details = ({ product }: { product: SingleProductProps[] }) => {

  return (
  <Container>
        <Row>
        <Col>
          <Image src=".././images/4-5-2.jpg" fluid />
        </Col>
        <Col md={6}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3> {product.name} </h3>
            </ListGroup.Item>
            <ListGroup.Item>Price : ${product.price}</ListGroup.Item>
            <ListGroup.Item>
              Description : {product.description}
            </ListGroup.Item>
            <ListGroup.Item>
              Brand : {product.brand}
            </ListGroup.Item>
            <ListGroup.Item>
              Color : {product.color}
            </ListGroup.Item>
            <ListGroup.Item>
              Size : {product.size}
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
                    <strong>$100</strong>
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

