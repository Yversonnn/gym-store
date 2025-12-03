import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const ProductCard = ({ product }) => (
  <Card className="h-100 shadow-sm">
    <Card.Img
      variant="top"
      src={product.imageUrl || '/images/placeholder.svg'}
      onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.svg'; }}
      style={{ height: 220, objectFit: 'cover' }}
    />
    <Card.Body className="d-flex flex-column">
      <Card.Title>{product.name}</Card.Title>
      <Rating value={product.rating} reviews={product.reviews} />
      <div className="mt-auto d-flex justify-content-between align-items-center">
        <div><strong>₱{product.price}</strong></div>
        <Button as={Link} to={`/product/${product.id}`} variant="primary" size="sm">View</Button>
      </div>
    </Card.Body>
  </Card>
);

export default ProductCard;
