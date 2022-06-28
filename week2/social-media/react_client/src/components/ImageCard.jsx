import React from "react";
import { Card } from "react-bootstrap";

const ImageCard = ({ show }) => {
  const dateChange = (timeStamp) => {
    const d = new Date(timeStamp);
    let date = d.toDateString() + ", " + d.getHours() + ":" + d.getMinutes();
    return date;
  };

  return (
    <>
      <Card className="shadow-lg m-2 p-3 rounded" style={{ width: "18rem" }}>
        <Card.Img src={`http://localhost:8080/${show.image}`} />
        <Card.Body>
          <Card.Title>Title: {show.title}</Card.Title>
          <Card.Text>{dateChange(show.updatedAt)}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default ImageCard;
