import React from 'react';
import { Table, Button, Form, Image } from 'react-bootstrap';
import { useCartState, useCartDispatch } from '../store/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const cartState = useCartState();
  const dispatch = useCartDispatch();
  if (!cartState || !dispatch) return <div><h2>Cart not available</h2></div>;

  const { items } = cartState;
  const total = items.reduce((acc, i) => acc + i.price * i.qty, 0);

  if (items.length === 0) return (
    <div>
      <h2>Your Cart is Empty</h2>
      <p><Button as={Link} to="/products" variant="link" className="p-0">Go shopping</Button></p>
    </div>
  );

  return (
    <div>
      <h2>Your Cart</h2>
      <Table responsive bordered className="align-middle">
        <thead>
          <tr>
            <th>Product</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>
                <div className="d-flex align-items-center gap-3">
                  <Image src={item.imageUrl} alt={item.name} style={{ width: 64, height: 64, objectFit: 'cover' }} rounded />
                  <div>{item.name}</div>
                </div>
              </td>
              <td>
                <Form.Control type="number" min="1" value={item.qty} onChange={(e) => dispatch({ type: 'UPDATE_QTY', payload: { id: item.id, qty: Number(e.target.value) } })} />
              </td>
              <td>₱{item.price}</td>
              <td>₱{item.price * item.qty}</td>
              <td>
                <Button variant="danger" size="sm" onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}>Remove</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="d-flex justify-content-between align-items-center">
        <Button variant="secondary" onClick={() => dispatch({ type: 'CLEAR_CART' })}>Clear Cart</Button>
        <h4>Total: ₱{total}</h4>
        <Button variant="success" onClick={() => alert('Checkout not implemented')}>Checkout</Button>
      </div>
    </div>
  );
};

export default CartPage;
