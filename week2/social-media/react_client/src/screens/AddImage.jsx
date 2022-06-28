import axios from "axios";
import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const AddImage = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const addimageHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("image", image);
    formData.append("title", title);

    await axios.post("http://localhost:8080/api/images/addImages", formData);

    alert("Image Upload Successful");
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <Container style={{ backgroundColor: "#EAEAEA" }} className="mt-5 p-2">
        <hr />
        <h1>Add Post</h1>
        <hr />

        <Form
          onSubmit={addimageHandler}
          method="POST"
          encType="multipart/form-data"
        >
          <Form.Group controlId="fileName" className="mb-3">
            <Form.Label>Upload Image</Form.Label>
            <Form.Control
              type="file"
              name="image"
              onChange={(e) => setImage(e.target.files[0])}
              size="lg"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Post
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default AddImage;
