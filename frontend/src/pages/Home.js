import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Home = () => (
  <div className="text-center">
    <div className="p-4 rounded-3 text-white" style={{
        backgroundImage: 'url(/images/gym-bg.svg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div style={{ backgroundColor: 'rgba(65, 49, 202, 1)', padding: '2rem' }}>
        <h1>NIG Store</h1>
        <p className="lead">Premium supplements — WHEY, CREATINE, PRE-WORKOUT, and more.</p>
        <Button as={Link} to="/products" variant="success">Shop Supplements</Button>
      </div>
    </div>
  </div>
);

export default Home;
