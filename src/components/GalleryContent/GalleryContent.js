import React from "react";
import { Col } from "react-bootstrap";
import "./GalleryContent.css";

const GalleryContent = ({ item }) => {
  return (
    <Col lg={4}>
      <img className="gallery-image mb-4 w-100" src={item.image} alt="" />
    </Col>
  );
};

export default GalleryContent;
