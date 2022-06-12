import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import Head from "next/head";
import { Router } from "next/router";
import { Card, Col, Image, ListGroup, Row } from "react-bootstrap";
import Header from "../../components/common/Header";
import Details from "../../components/product-details/Details";
import { SingleProductProps } from "../../utils/types/landingpage";
import { API_BASE_URL, APP_URL } from "../api/hello";

const ProductDetails: NextPage =({
  product
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
 

  let images = product["img"];
  
  return (
    <div>
      <Head>
        {/* <meta property="og:url" content={`${APP_URL}/${Router.query.id}`} /> */}
        <meta property="og:type" content="Product Details" />
        <meta property="og:title" content={product.name} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={`http://localhost:8000${images[0].media}`} />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="500" /> 
      </Head>
  
        <div> 
        <Header />
      <div>
      <Details product={product}/>
      </div>
        </div>

    </div>
  );
}

export default ProductDetails;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.query.id;

  const productRes = await fetch(`${API_BASE_URL}/product-details/${id}`);
  const product: SingleProductProps[] = await productRes.json();

  return { props: { product } };
};