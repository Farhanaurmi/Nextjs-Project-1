import { Button, Container, Form } from "react-bootstrap";
import Header from "../../components/common/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <div>
        <Container>
          <h1>Add Product</h1>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                // value={name}
                // onChange={(e)=>setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="brand">
              <Form.Label>brand</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Brand"
                // value={brand}
                // onChange={(e)=>setBrand(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="photo">
              <Form.Label>Photo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Photo"
                // value={photo}
                // onChange={(e)=>setPhoto(e.target.value)}
              ></Form.Control>
              {/* <Form.File
                    id='image-file'
                    label='Choose File'
                    // custom
                    // onChange={uploadFileHandler}
                    >

                    </Form.File> */}
              {/* {uploading && <Loader/>} */}
            </Form.Group>

            <Form.Group controlId="Price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Price"
                // value={price}
                // onChange={(e)=>setPrice(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="Category">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Category"
                // value={category}
                // onChange={(e)=>setCategory(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="Description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Description"
                // value={description}
                // onChange={(e)=>setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="countInStock">
              <Form.Label>CountInStock</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter CountInStock"
                // value={countInStock}
                // onChange={(e)=>setCountInStock(e.target.value)}
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
}
