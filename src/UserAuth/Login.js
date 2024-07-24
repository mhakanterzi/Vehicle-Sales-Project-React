import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import Register from './Register'; 

const Login = ({ setIsLoggedIn, setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showRegister, setShowRegister] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      setUser(user.name);
      setIsLoggedIn(true);
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>Login</Card.Title>
        <Form onSubmit={handleLogin}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <div className="button-container">
            <Button variant="primary" type="submit">
              Login
            </Button>
            <Button 
              variant="primary" 
              onClick={() => setShowRegister(true)}
              style={{ marginLeft: '10px' }} // Add some space between buttons
            >
              Register
            </Button>
          </div>
        </Form>
        {showRegister && <Register setShowRegister={setShowRegister} />}
      </Card.Body>
    </Card>
  );
};

export default Login;
