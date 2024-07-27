import React, { useState, useEffect } from "react";
import { Button, Card, CardBody, CardTitle, Form, FormControl, FormLabel, FormGroup } from "react-bootstrap";

const UpdateVehicle = ({ onBackToMenu }) => {
    const [updateVehicle, setUpdateVehicle] = useState([]);
    const [selectedPlate, setSelectedPlate] = useState('');
    const [newBrand, setNewBrand] = useState('');
    const[newModel, setNewModel] = useState(' ');
    const[newYear, setNewYear] = useState('');
    const[newPlate, setNewPlate] = useState(' ');

    useEffect(() => {
        const storedVehice = JSON.parse(localStorage.getItem('vehicle')) || [];
        setUpdateVehicle(storedVehice);
    }, []);

    const SelectChange = (e) => {
        const plate = e.target.value;
        setSelectedPlate(plate);

        // Find the selected vehicle
        const vehicle = updateVehicle.find(v => v.plate === plate);
        if (vehicle) {
            setNewBrand(vehicle.brand);
            setNewModel(vehicle.model);
            setNewYear(vehicle.year);
            setNewPlate(vehicle.plate);
        }
    };

    const handleUpdateVehicle = (e) => {
        e.preventDefault();

        const updatedVehicle = updateVehicle.map(v => 
            v.plate === selectedPlate ? { brand: newBrand, model: newModel, year: newYear, plate: newPlate } : v
        );

        localStorage.setItem('vehicle', JSON.stringify(updatedVehicle));
        alert('Vehicle updated successfully.');
    };

    return (
        <Card>
            <CardBody>
                <CardTitle>Update Vehicle</CardTitle>

                <Form onSubmit={handleUpdateVehicle}>
                    <FormGroup controlId="forSelectVehicle">
                        <FormLabel>Select Vehicle</FormLabel>
                        <FormControl as="select" value={selectedPlate} onChange={SelectChange} required>
                            <option value="">Select a vehicle</option>
                            {updateVehicle.map((vehicle, index) => (
                                <option key={index} value={vehicle.plate}>{vehicle.plate}</option>
                            ))}
                        </FormControl>
                    </FormGroup>

                    {selectedPlate && (
                        <>
                            <FormGroup controlId="forNewBrand">
                                <FormLabel>Brand</FormLabel>
                                <FormControl
                                    type="text"
                                    value={newBrand}
                                    onChange={(e) => setNewBrand(e.target.value)}
                                    required
                                />
                            </FormGroup>
                            <FormGroup controlId="forNewModel">
                                <FormLabel>Model</FormLabel>
                                <FormControl
                                    type="text"
                                    value={newModel}
                                    onChange={(e) => setNewModel(e.target.value)}
                                    required
                                />
                            </FormGroup>
                            <FormGroup controlId="forNewYear">
                                <FormLabel>Year</FormLabel>
                                <FormControl
                                    type="number"
                                    value={newYear}
                                    onChange={(e) => setNewYear(e.target.value)}
                                    required
                                />
                            </FormGroup>
                            <FormGroup controlId="forNewPlate">
                                <FormLabel>Plate</FormLabel>
                                <FormControl
                                    type="text"
                                    value={newPlate}
                                    onChange={(e) => setNewPlate(e.target.value)}
                                    required
                                />
                            </FormGroup>
                        </>
                    )}

                
                    <div  className='button-Menu' style={{marginLeft : '8px' , marginTop: '20px'}}>
                        <Button type="submit">Update Vehicle</Button>
                        <Button onClick={onBackToMenu} variant="primary" >
                            Back To Vehicle Menu
                        </Button>
                    </div>
                </Form>
            </CardBody>
        </Card>
    );
};

export default UpdateVehicle;
