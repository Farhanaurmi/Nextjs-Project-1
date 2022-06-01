import { Card, Col, Image, ListGroup, Row } from "react-bootstrap";
import Header from "../../components/common/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <div>
        <Row>
          <Col>
            <Image src=".././images/4-5-2.jpg" fluid />
          </Col>
          <Col md={6}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3> ugyuf </h3>
              </ListGroup.Item>
              <ListGroup.Item>Price : $100</ListGroup.Item>
              <ListGroup.Item>
                Description : fhdhf
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
      </div>
    </div>
  );
}
