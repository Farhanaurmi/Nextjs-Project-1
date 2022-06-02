import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import { Col, Container, Row } from "react-bootstrap";
import Allproduct from "../components/all-product/Allproduct";
import Header from "../components/common/Header";
import { AllProductListProps } from "../utils/types/landingpage";
import { API_BASE_URL } from "./api/hello";

const index: NextPage = ({
  productsData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
     <Header/>
     <Row>
        <Col sm={12} md={6} lg={3} xl={3}>
          <Allproduct allproducts={productsData}/> 
        </Col>
     </Row>
   </div>
  );
}

export default index;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`${API_BASE_URL}/all-products`);
  const productsData: AllProductListProps[] = await res.json();

  if (res.status !== 200) {
    return {
      notFound: true,
    };
  }
  return {
    props: { productsData },
  };
};
