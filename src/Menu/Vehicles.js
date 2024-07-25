import React, { useState } from 'react';
import { Button, Card, CardBody, CardTitle } from 'react-bootstrap';
import AddVehicle from '../Vehicle/AddVehicle';

const Vehicle = ({onBackToMenu}) =>{
    const[addVheicle, setAddVehicle] = useState(false);

    const handleAddVehcile = () =>{
        setAddVehicle(true);
    }
    const handleAddVehicleBack = () =>{
        setAddVehicle(false);
    }
    if(addVheicle){
       return<AddVehicle onBackToMenu={handleAddVehicleBack} />
    }


return(
    <Card className="mb-3">
         <CardBody>
            <CardTitle>Vehicle Menu</CardTitle>
            <div className='button-Menu'>
                <Button onClick={handleAddVehcile}>
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