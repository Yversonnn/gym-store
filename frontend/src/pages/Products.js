import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Products = () => (
  <div>
    <h2>BILI NA KAYO</h2>
    <Row xs={1} md={2} lg={3} className="g-4 mt-2">
      {products.map(p => (
        <Col key={p.id}>
          <ProductCard product={p} />
        </Col>
      ))}
    </Row>
  </div>
);

export default Products;
