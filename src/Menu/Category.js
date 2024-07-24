import React from 'react';
import { Card, Button, CardBody, CardTitle } from 'react-bootstrap';

const Category = ({ onBackToMenu }) => {
  return (
    <Card className="mb-3">
      <CardBody>      
        <CardTitle>Category Menu</CardTitle>
        <div className='button-Menu'>
        <Button>
          Add Category
        </Button>
        <Button>
            Update Category
          </Button>
        </div>
        <div className='button-Menu'>
          <Button>
            Delete Category
          </Button>
          <Button variant="primary" onClick={onBackToMenu}>
          Back To Main Menu
        </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default Category;
