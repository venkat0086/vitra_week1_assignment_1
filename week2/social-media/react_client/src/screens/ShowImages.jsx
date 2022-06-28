import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import ImageCard from "../components/ImageCard";
import Navbar from "../components/Navbar";

const ShowImages = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImagesData = async () => {
      const { data } = await axios.get(
        "http://localhost:8080/api/images/allImages"
      );
      setImages(data);
    };
    getImagesData();
  }, []);

  return (
    <>
      <Navbar />
      <Container
        style={{ marginTop: "4%" }}
        className="justify-content-center p-2"
      >
        <h1 className="text-center">Show All Posts</h1>
        <hr />

        <Row>
          {images.map((image) => {
            return (
              <Col md={6} lg={4} sm={12} key={image.id}>
                <ImageCard show={image} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default ShowImages;
