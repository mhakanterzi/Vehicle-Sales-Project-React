import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';


const Register = ({ setShowRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some((user) => user.email === email);
    if (userExists) {
      alert('User already exists');
    } else {
      users.push({ name, email, password });
      localStorage.setItem('users', JSON.stringify(users));
      alert('Registration successful');
      setShowRegister(false);
    }
  };

  return (

    <Card className="mb-3">
      <Card.Body>
        <Card.Title>Register</Card.Title>
        <Form onSubmit={handleRegister}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
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
              Register
            </Button>
            <Button variant="secondary" onClick={() => setShowRegister(false)}>
              Cancel
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Register;
  