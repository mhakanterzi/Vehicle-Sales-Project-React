import React from 'react';
import { Button, Card, CardBody, CardTitle } from 'react-bootstrap';

const Vehicle = ({onBackToMenu}) =>{
return(
    <Card className="mb-3">
         <CardBody>
            <CardTitle>Vehicle Menu</CardTitle>
            <div className='button-Menu'>
                <Button>
                    Add Vehicle
                </Button>
                <Button>
                    Update Vehicle
                </Button>
            </div>
            <div className='button-Menu'>
                <Button>
                    Delete Vehicle
                </Button>
                <Button variant='primary' onClick={onBackToMenu} >
                    Go Back To Main Menu
                </Button>
            </div>
        </CardBody>
    </Card>
    )
}

export default Vehicle;