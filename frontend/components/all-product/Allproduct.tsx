import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { SingleProductProps } from "../../utils/types/landingpage";


const Allproduct = ({ product }: { product: SingleProductProps[] }) => {

  return (
  <Container>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src=".././images/4-5-2.jpg" fluid />
    <Card.Body>
    <a href={`product-details?id=${product["id"]}`}>
      <Card.Title>{product["name"]}</Card.Title>
    </a>
        <Card.Text>
        {product["description"]}
        </Card.Text>
        <Card.Text>
        price: {product["price"]}
        </Card.Text>
        <Card.Text>
        color: {product["color"]}
        </Card.Text>
        <Card.Text>
        brand: {product["brand"]}
        </Card.Text>
        <Card.Text>
        size: {product["size"]}
        </Card.Text>
    </Card.Body>
    </Card>
  </Container>
  );
};

export default Allproduct;

