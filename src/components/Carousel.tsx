import { Carousel } from "react-bootstrap";

const HomeCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="/images/slide1.jpg" alt="slide1" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/images/slide2.jpg" alt="slide2" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/images/slide3.jpg" alt="slide3" />
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarousel;
