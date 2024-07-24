import React from 'react';
import { Button, Card, CardBody, CardTitle } from 'react-bootstrap';

const Vehicle = ({onBackToMenu}) =>{
return(
    <Card className="mb-3">
         <CardBody>
            <CardTitle>
                CategoryMenu
            </CardTitle>
        <Button variant='primary' onClick={onBackToMenu} >
            Go Back To Main Menu
        </Button>
        </CardBody>
    </Card>
    )
}

export default Vehicle;