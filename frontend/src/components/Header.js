import React from 'react';
import { Navbar, Container, Nav, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCartState } from '../store/CartContext';

const Header = () => {
  const cartState = useCartState() || { items: [] };
  const count = cartState.items.reduce((acc, i) => acc + (i.qty || 1), 0);

  return (
    <Navbar bg="primary" variant="dark" expand="md">
      <Container>
        <Navbar.Brand as={Link} to="/">PAMPALAKAS</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/products">PRODUKTO</Nav.Link>
            <Nav.Link as={Link} to="/cart">Cart {count > 0 && <Badge bg="light" text="dark">{count}</Badge>}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
