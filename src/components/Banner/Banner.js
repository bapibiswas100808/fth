import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Banner.css";

const Banner = () => {
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    fetch("Banner.json")
      .then((res) => res.json())
      .then((data) => setBanner(data));
  }, []);
  return (
    <section>
      <div className="banner-area">
        <Carousel>
          {banner.map((item) => (
            <Carousel.Item interval={1000} key={item.id}>
              <img
                className="d-block w-100"
                src={item.image}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>{item.heading}</h3>
                <p>{item.text}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Banner;
