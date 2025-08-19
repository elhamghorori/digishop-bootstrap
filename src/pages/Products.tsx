import ProductList from "../components/ProductList";
import { Container } from 'react-bootstrap';

const Products = () => {
  return (
    <Container className="my-4">
      <h1 className="mb-4">تمام محصولات</h1>
      <ProductList />
    </Container>
  );
};

export default Products;
