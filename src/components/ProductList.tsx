import { Card, Button, Row, Col } from "react-bootstrap";

const products = [
  { id: 1, name: "موبایل سامسونگ", price: "12,000,000", img: "/images/product1.jpg" },
  { id: 2, name: "لپ‌تاپ ایسوس", price: "25,000,000", img: "/images/product2.jpg" },
  { id: 3, name: "هدفون سونی", price: "2,000,000", img: "/images/product3.jpg" },
];

const ProductList = () => {
  return (
    <Row>
      {products.map((p) => (
        <Col key={p.id} md={4}>
          <Card className="mb-3">
            <Card.Img variant="top" src={p.img} />
            <Card.Body>
              <Card.Title>{p.name}</Card.Title>
              <Card.Text>{p.price} تومان</Card.Text>
              <Button variant="primary">خرید</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
