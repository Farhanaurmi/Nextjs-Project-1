import { Col, Row } from "react-bootstrap";
import Allproduct from "../components/all-product/Allproduct";
import Header from "../components/common/Header";


export default function Home() {
  return (
   <div>
     <Header/>
     <Row>
        <Col sm={12} md={6} lg={3} xl={3}>
          <Allproduct/> 
        </Col>
     </Row>
   </div>
  )
}
