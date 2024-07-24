import React from 'react';
import { Button, Card, CardBody, CardTitle } from 'react-bootstrap';

const Customer = ({onBackToMenu}) => {
return(
    <Card className='mb3'>
        <CardBody>
            <CardTitle>Customer Menu</CardTitle>
            <Button variant='primary' onClick={onBackToMenu} >
                Back To Main Menu
            </Button>
        </CardBody>
    </Card>
)

}

export default Customer;