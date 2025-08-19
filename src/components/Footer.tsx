import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5>درباره ما</h5>
            <p>
              دیجی‌شاپ یک فروشگاه اینترنتی برای خرید انواع محصولات دیجیتال و لوازم خانگی است.
            </p>
          </Col>
          <Col md={4}>
            <h5>لینک‌های مفید</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">خانه</a></li>
              <li><a href="/products" className="text-light text-decoration-none">محصولات</a></li>
              <li><a href="/about" className="text-light text-decoration-none">درباره ما</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">تماس با ما</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>تماس با ما</h5>
            <p>ایمیل: support@digishop.com</p>
            <p>تلفن: 021-12345678</p>
          </Col>
        </Row>
        <hr className="border-light" />
        <p className="text-center mb-0">
          © {new Date().getFullYear()} DigiShop. همه حقوق محفوظ است.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
