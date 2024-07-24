import React from 'react';
import { Button, Card, CardBody, CardTitle } from 'react-bootstrap';

const Listing = ({onBackToMenu}) =>{
return(
    <Card>
        <CardBody>
            <CardTitle>Listing Menu</CardTitle>
            <Button variant='primary' onClick={onBackToMenu}>
             Back To Manim Menu
            </Button>
        </CardBody>
    </Card>
)
}

export default Listing;