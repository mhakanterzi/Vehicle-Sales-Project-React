import React from 'react';
import { Card, Button, CardBody, CardTitle } from 'react-bootstrap';

const Category = ({ onBackToMenu }) => {
  return (
    <Card className="mb-3">
      <CardBody>
        <CardTitle>Category Menu</CardTitle>
        <Button variant="primary" onClick={onBackToMenu}>
          Ana Menüye Dön
        </Button>
      </CardBody>
    </Card>
  );
};

export default Category;
