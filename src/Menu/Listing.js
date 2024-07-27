import React from 'react';
import { Button, Card, CardBody, CardTitle } from 'react-bootstrap';

const Listing = ({onBackToMenu}) =>{
return(
    <Card>
        <CardBody>
            <CardTitle>Listing Menu</CardTitle>
            <div className='button-Menu'>
                <Button>
                    On Sale Vehicles
                </Button>
                <Button>
                    Saled Vehicles
                </Button>
            </div>
            <div className='button-Menu'>
                <Button>
                    All Vehicles
                </Button>
                <Button  variant='primary' onClick={onBackToMenu} >
             Back To Main Menu
            </Button>
            </div>
        </CardBody>
    </Card>
)
}

export default Listing;