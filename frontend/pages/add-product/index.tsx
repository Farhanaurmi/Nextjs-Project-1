import axios from "axios";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { Button, Container, Dropdown, Form } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import Header from "../../components/common/Header";
import { CategoryProps, SingleProductProps } from "../../utils/types/landingpage";
import { RootAppStateProps } from "../../utils/types/reduxTypes";
import { API_BASE_URL } from "../api/hello";

const addProduct = ({
  categoryData
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {

  const { userInfo } = useSelector(
    (state: RootAppStateProps) => state.AuthReducer
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SingleProductProps>();
  const router = useRouter();


  // export const addContact = (data) => async (dispatch) => {
  //   try {
  //        var formData=new FormData();
  //        formData.append('name',data.Name);
  //        formData.append('email',data.Email);
  //        formData.append('phone',data.Phone);
  //        formData.append('image',data.Image);
  //        let response= await Axios.post(`http://localhost:3000/api/contact/addContact`,formData,{
  //           headers:{
  //               'x-auth-token':localStorage.getItem('token')
  //           }
  //        });
  //     } catch (error) {
  //         console.log(error);
  //     }
  //  }

  const onSubmit: SubmitHandler<SingleProductProps> = async (data) => {
    
    //   const request = await fetch(`${API_BASE_URL}/add/product`, {
    //     method: "POST",
    //     body: JSON.stringify(data),
    //     headers: {
    //       'Content-type':'application/json',
    //       Authorization: `Bearer ${userInfo['token']}`,
    //     },
    //   });
    // };
    
    var formData=new FormData();
    formData.append('name',data.name);
    formData.append('brand',data.brand);
    formData.append('price',data.price);
    formData.append('SKU',data.SKU);
    formData.append('description',data.description);
    formData.append('category',data.category);
    formData.append('color',data.color);
    formData.append('size',data.size);

    var filesLength=data.file_content.length;
    for(var i=0;i<filesLength;i++){
	  formData.append("file_content", data.file_content[i]);
    }


    
    const config = {
      headers: {
        "Content-type": "multipart/form-data",
        Authorization: `Bearer ${userInfo["token"]}`,
      },
    };

    const { request } = await axios.post(
      `${API_BASE_URL}/add/product`,
      formData,
      config
    );
    if (request.status === 200) { 
      toast("Product Added!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      router.push('/')
    } else {
      const response = await request.json();
      toast(`Product Added Failed. ${response["details"]}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    
   
  };


  return (
    <div>
      <Header />
      <div>
        <Container>
        <ToastContainer containerId="an id" draggable={false} />
          <h1>Add Product</h1>
          <Form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                id="name"
                required
                {...register("name", { required: true })}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="brand">
              <Form.Label>brand</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Brand"
                id="brand"
                required
                {...register("brand", { required: true })}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="file_content">
              <Form.Label>Photo</Form.Label>
              <Form.Control
                type="file"
                placeholder="Enter Photo"
                id="file_content"
                multiple
                required
                {...register("file_content", { required: true })}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="Price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Price"
                id="price"
                required
                {...register("price", { required: true })}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="Category">
              <Form.Label>Select Category</Form.Label>
              <Form.Select {...register("category", { required: true })}>
                  {categoryData.map((item: CategoryProps) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
              </Form.Select >             
            </Form.Group>

            {/* <Form.Group controlId="Category">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Category"
                id="category"
                required
                {...register("category", { required: true })}
              ></Form.Control>
            </Form.Group> */}

            <Form.Group controlId="Description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Description"
                id="description"
                required
                {...register("description", { required: true })}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="Color">
              <Form.Label>Color</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Color"
                id="color"
                required
                {...register("color", { required: true })}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="Size">
              <Form.Label>Size</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Size"
                id="size"
                required
                {...register("size", { required: true })}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="SKU">
              <Form.Label>SKU</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter SKU"
                id="SKU"
                required
                {...register("SKU", { required: true })}
              ></Form.Control>
            </Form.Group>

            <Button type="submit" variant="primary">
              Update
            </Button>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default addProduct;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const resCate = await fetch(`${API_BASE_URL}/category`);
  const categoryData: CategoryProps[] = await resCate.json();

  return {
    props: { categoryData },
  };
};