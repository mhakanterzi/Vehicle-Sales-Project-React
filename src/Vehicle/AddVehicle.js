import React, {useState, useEffect} from "react";
import {Form , Button , Card, CardTitle, CardBody, FormControl, FormLabel, FormGroup} from 'react-bootstrap';

const AddVehicle = ({ onBackToMenu, setAddVehicle }) => {
    const [brand, setBrand] = useState(' ');
    const [model, setModel] = useState(' ');
    const [year, setYear] = useState(' ');
    const [plate, setPlate] = useState(' ');
    const [showVehicle, setShowVehicle] = useState([]);

    useEffect (() => {
        const addedVehicle =JSON.parse(localStorage.getItem('vehicle')) || []
        setShowVehicle(addedVehicle);
    }, [])

    const handleAddVehicle = (e) => {
        e.preventDefault();
        const vehicle =JSON.parse(localStorage.getItem('vehicle')) || [];
        const vehicleExist = vehicle.some((vehicle) => vehicle.plate === plate );
        if(vehicleExist){
            alert('Vehicle ALrady Exist')
        }else{
            vehicle.push({brand, model, year, plate});
            localStorage.setItem('vehicle', JSON.stringify(vehicle));
            alert('Vehicle Added Succesfuly');
        }
    }


    return(
        <Card>
                <CardBody>
                    <ul>
                        {showVehicle.map((vehicle, index) =>(
                            <li key={index}> {vehicle.plate} </li>
                        ))}
                    </ul>
                </CardBody>
                <CardBody>
                    <CardTitle>Add Vehicle</CardTitle>
                    <Form onSubmit={handleAddVehicle}>
                        <FormGroup controlId="forBrand">
                            <FormLabel>Brand</FormLabel>
                            <FormControl type="text" value={brand} onChange={(e) => setBrand(e.target.value)} required/>
                        </FormGroup>
                        <FormGroup controlId="forModel">
                            <FormLabel>Model</FormLabel>
                            <FormControl type="text" value={model} onChange={(e)=> setModel(e.target.value)} required />
                        </FormGroup>
                        <FormGroup controlId="forYear">
                            <FormLabel>Year</FormLabel>
                            <FormControl type="number" value={year} onChange={(e) => setYear(e.target.value)} required/>
                        </FormGroup>
                            <FormGroup controlId="forPlate">
                            <FormLabel>Plate</FormLabel>
                        <FormControl type="text" value={plate} onChange={(e) => setPlate(e.target.value)} required/>
                        </FormGroup>
                        <div className="button-Menu">
                            <Button type="submit">
                                Add Vehicle
                            </Button>
                        </div>
                    </Form>

                <Button style={{display: 'flex' ,height:'60px', width:'160px', marginLeft:'100px' }} variant="primary" onClick={onBackToMenu}>
                    Back To Vehicle Menu
                </Button>
                </CardBody>
        </Card>
    );
};

export default AddVehicle;