import AppCarousel from "../components/Carousel";
import ProductList from "../components/ProductList";
import FilterSidebar from "../components/FilterSidebar";
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="my-4">
      <AppCarousel />
      <Row className="mt-4">
        <Col md={3}><FilterSidebar /></Col>
        <Col md={9}><ProductList /></Col>
      </Row>
    </Container>
  );
};

export default Home;
