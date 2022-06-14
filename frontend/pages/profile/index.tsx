import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootAppStateProps } from "../../utils/types/reduxTypes";

const Details = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { userInfo } = useSelector(
    (state: RootAppStateProps) => state.AuthReducer
  );
  useEffect(() => {
    if (userInfo) {
      router.push("/profile");
    }
  }, [router]);

  console.log(userInfo);
  return (
    <Container>
      <br />
      <br />
      <Row>
        <Col md={3}></Col>
        <Col md={6}>
          <h5>Profile</h5>
          <ListGroup variant="flush">
            <ListGroup.Item></ListGroup.Item>
            <ListGroup.Item>
              Email:{" "}
              <strong>
                {userInfo && userInfo["email"] && userInfo["email"]}
              </strong>
            </ListGroup.Item>
            <ListGroup.Item>
              Name:{" "}
              <strong>
                {userInfo && userInfo["full_name"] && userInfo["full_name"]}
              </strong>
            </ListGroup.Item>
            <ListGroup.Item></ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}></Col>
      </Row>
    </Container>
  );
};

export default Details;
