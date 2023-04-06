import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import GalleryContent from "../GalleryContent/GalleryContent";
import "./Gallery.css";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  useEffect(() => {
    fetch("gallery.json")
      .then((res) => res.json())
      .then((data) => setGallery(data));
  }, []);
  return (
    <section className="section bg-danger">
      <div className="gallery-area">
        <Container>
          <h3 className="text-center pb-4 text-white text-uppercase">
            See Our Events
          </h3>
          <Row>
            {gallery.map((item) => (
              <GalleryContent key={item.id} item={item}></GalleryContent>
            ))}
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Gallery;
