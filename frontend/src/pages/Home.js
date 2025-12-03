import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './Home.css';

const Home = () => {
  // Featured products (first 3 products)
  const featuredProducts = products.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section text-white text-center py-5" style={{
        backgroundImage: 'linear-gradient(rgba(65, 49, 202, 0.9), rgba(30, 20, 100, 0.9)), url(/images/gym-bg.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '500px',
        display: 'flex',
        alignItems: 'center'
      }}>
        <Container>
          <h1 className="display-3 fw-bold mb-3" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
            Welcome to NIG Store
          </h1>
          <p className="lead fs-4 mb-4">
            Premium supplements for serious athletes — WHEY, CREATINE, PRE-WORKOUT, and more.
          </p>
          <p className="mb-4 fs-5">
            Transform your fitness journey with top-quality supplements
          </p>
          <div className="d-flex gap-3 justify-content-center">
            <Button as={Link} to="/products" variant="success" size="lg" className="px-5 py-3">
              Shop Now
            </Button>
            <Button as={Link} to="/products" variant="outline-light" size="lg" className="px-5 py-3">
              View Collection
            </Button>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="g-4">
            <Col md={4}>
              <Card className="text-center border-0 shadow-sm h-100">
                <Card.Body className="p-4">
                  <div className="mb-3" style={{ fontSize: '3rem' }}>🏋️</div>
                  <Card.Title className="fw-bold">Premium Quality</Card.Title>
                  <Card.Text className="text-muted">
                    100% authentic supplements from trusted brands. Lab-tested for purity and effectiveness.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center border-0 shadow-sm h-100">
                <Card.Body className="p-4">
                  <div className="mb-3" style={{ fontSize: '3rem' }}>🚚</div>
                  <Card.Title className="fw-bold">Fast Delivery</Card.Title>
                  <Card.Text className="text-muted">
                    Quick and secure shipping. Get your supplements delivered right to your doorstep.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center border-0 shadow-sm h-100">
                <Card.Body className="p-4">
                  <div className="mb-3" style={{ fontSize: '3rem' }}>💪</div>
                  <Card.Title className="fw-bold">Expert Support</Card.Title>
                  <Card.Text className="text-muted">
                    Get guidance from fitness experts. We're here to help you achieve your goals.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Featured Products Section */}
      <section className="py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Featured Products</h2>
            <p className="text-muted fs-5">Our most popular supplements trusted by athletes</p>
          </div>
          <Row className="g-4">
            {featuredProducts.map((product) => (
              <Col key={product.id} md={4}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
          <div className="text-center mt-5">
            <Button as={Link} to="/products" variant="primary" size="lg" className="px-5">
              View All Products
            </Button>
          </div>
        </Container>
      </section>

      {/* Categories Section */}
      <section className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Shop by Category</h2>
            <p className="text-muted fs-5">Find exactly what you need for your fitness goals</p>
          </div>
          <Row className="g-4">
            <Col md={3} sm={6}>
              <Card className="category-card border-0 shadow-sm text-center h-100" style={{ cursor: 'pointer', transition: 'transform 0.3s' }}>
                <Card.Body className="p-4">
                  <div className="mb-3" style={{ fontSize: '4rem' }}>🥛</div>
                  <Card.Title className="fw-bold">Protein</Card.Title>
                  <Card.Text className="text-muted">Build muscle & recover faster</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6}>
              <Card className="category-card border-0 shadow-sm text-center h-100" style={{ cursor: 'pointer', transition: 'transform 0.3s' }}>
                <Card.Body className="p-4">
                  <div className="mb-3" style={{ fontSize: '4rem' }}>⚡</div>
                  <Card.Title className="fw-bold">Pre-Workout</Card.Title>
                  <Card.Text className="text-muted">Boost energy & performance</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6}>
              <Card className="category-card border-0 shadow-sm text-center h-100" style={{ cursor: 'pointer', transition: 'transform 0.3s' }}>
                <Card.Body className="p-4">
                  <div className="mb-3" style={{ fontSize: '4rem' }}>💊</div>
                  <Card.Title className="fw-bold">Creatine</Card.Title>
                  <Card.Text className="text-muted">Increase strength & power</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6}>
              <Card className="category-card border-0 shadow-sm text-center h-100" style={{ cursor: 'pointer', transition: 'transform 0.3s' }}>
                <Card.Body className="p-4">
                  <div className="mb-3" style={{ fontSize: '4rem' }}>📈</div>
                  <Card.Title className="fw-bold">Mass Gainers</Card.Title>
                  <Card.Text className="text-muted">Gain weight & muscle mass</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-5" style={{ backgroundColor: '#4131ca', color: 'white' }}>
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2 className="display-5 fw-bold mb-4">Why Choose NIG Store?</h2>
              <ul className="fs-5 list-unstyled">
                <li className="mb-3">✓ 100% Authentic Products</li>
                <li className="mb-3">✓ Competitive Prices</li>
                <li className="mb-3">✓ Fast & Reliable Shipping</li>
                <li className="mb-3">✓ Expert Customer Support</li>
                <li className="mb-3">✓ Money-Back Guarantee</li>
              </ul>
            </Col>
            <Col md={6} className="text-center">
              <div className="p-5 bg-white bg-opacity-10 rounded-3">
                <h3 className="display-1 fw-bold">1000+</h3>
                <p className="fs-4">Happy Customers</p>
                <h3 className="display-1 fw-bold mt-4">4.8★</h3>
                <p className="fs-4">Average Rating</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className="py-5 text-center bg-dark text-white">
        <Container>
          <h2 className="display-4 fw-bold mb-4">Ready to Start Your Fitness Journey?</h2>
          <p className="lead mb-4">Join thousands of satisfied customers and transform your body today!</p>
          <Button as={Link} to="/products" variant="success" size="lg" className="px-5 py-3">
            Shop Supplements Now
          </Button>
        </Container>
      </section>
    </div>
  );
};

export default Home;
