import React from 'react';
import { Button, Card, CardBody, CardTitle } from 'react-bootstrap';

const Listing = ({onBackToMenu}) =>{
return(
    <Card>
        <CardBody>
            <CardTitle>Listing Menu</CardTitle>
            <div className='button-Menu'>
                <Button>
                    On Sale Cars
                </Button>
                <Button>
                    Saled Cars
                </Button>
            </div>
            <Button  variant='primary' onClick={onBackToMenu} style={{ marginLeft: '95px' ,height: '60px' ,width:'160px' }}>
             Back To Main Menu
            </Button>
        </CardBody>
    </Card>
)
}

export default Listing;