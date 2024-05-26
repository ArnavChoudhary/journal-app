import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => (
  <div className="Home">
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <Card.Title>Welcome to JournalApp</Card.Title>
          <Card.Text>
            Your personal journal, safe and secure.
          </Card.Text>
          <Button variant="primary" as={Link} to="/login">Get Started</Button>
        </Card.Body>
      </Card>
    </Container>
  </div>
);

export default Home;
