import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import Button from 'react-bootstrap/Button';
import { useCartDispatch } from '../store/CartContext';
import Form from 'react-bootstrap/Form';
import Rating from '../components/Rating';

const ProductScreen = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [qty, setQty] = useState(1);
  const dispatch = useCartDispatch();

  if (!product) return <h2>Product not found</h2>;

  const addToCart = () => dispatch({ type: 'ADD_ITEM', payload: { ...product, qty } });

  return (
    <div className="row">
      <div className="col-md-6">
        <img
          src={product.imageUrl || '/images/placeholder.svg'}
          alt={product.name}
          className="img-fluid rounded"
          onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.svg'; }}
        />
      </div>
      <div className="col-md-6">
        <h2>{product.name}</h2>
        <Rating value={product.rating} reviews={product.reviews} />
        <h3 className="mt-3">₱{product.price}</h3>
        <p>{product.description}</p>

        <div className="d-flex align-items-center gap-3 my-3">
          <Form.Select value={qty} onChange={(e) => setQty(Number(e.target.value))} style={{ width: '6rem' }}>
            {[1,2,3,4,5].map(n => <option key={n} value={n}>{n}</option>)}
          </Form.Select>
          <Button variant="success" onClick={addToCart}>Add to Cart</Button>
          <Button as={Link} to="/cart" variant="outline-primary">Go to Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
