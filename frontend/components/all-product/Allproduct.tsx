import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { AllProductListProps, SingleProductProps } from "../../utils/types/landingpage";

const Allproduct = ({ allproducts }: { allproducts: SingleProductProps[] }) => {
  return (
  <Container>
  
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src=".././images/4-5-2.jpg" />
    <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
    </Card.Body>
    </Card>
  </Container>
  );
};

export default Allproduct;

