import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ImageCard from "../components/ImageCard";
import Navbar from "../components/Navbar";

const ShowImages = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImagesData();
  }, []);

  const getImagesData = () => {
    axios.get("http://localhost:8080/api/images/allImages").then((res) => {
      setImages(res.data);
    });
  };

  const sortByName = (value) => {
    axios
      .get(`http://localhost:8080/api/images/allImages?sort=${value}`)
      .then((res) => {
        setImages(res.data);
      });
  };

  return (
    <>
      <Navbar />
      <Container
        style={{ marginTop: "4%" }}
        className="justify-content-center p-2"
      >
        <div>
          <h1 className="text-center">Show All Posts</h1>
          <div style={{ display: "flex" }}>
            <div>Sort By Name: &nbsp;</div>
            <div>
              <Form.Select
                style={{ width: "200px" }}
                aria-label="Default select example"
                onChange={(e) => {
                  sortByName(e.target.value);
                }}
              >
                <option>Select</option>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </Form.Select>
            </div>
          </div>
        </div>

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
