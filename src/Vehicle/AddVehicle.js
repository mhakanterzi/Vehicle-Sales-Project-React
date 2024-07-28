import React, {useState, useEffect} from "react";
import {Form , Button , Card, CardTitle, CardBody, FormControl, FormLabel, FormGroup} from 'react-bootstrap';

const AddVehicle = ({ onBackToMenu, setAddVehicle }) => {
    const [brand, setBrand] = useState(' ');
    const [model, setModel] = useState(' ');
    const [year, setYear] = useState(' ');
    const [plate, setPlate] = useState(' ');
    const [showVehicle, setShowVehicle] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const[ category, setCategory] = useState([]);


    useEffect (() => {
        const addedVehicle =JSON.parse(localStorage.getItem('vehicle')) || []
        setShowVehicle(addedVehicle);
    }, [])

    useEffect (() =>{
        const storedCategory =JSON.parse(localStorage.getItem('cat')) || []
        setCategory(storedCategory);
    },[])

    const handleAddVehicle = (e) => {
        e.preventDefault();
        const vehicle =JSON.parse(localStorage.getItem('vehicle')) || [];
        const vehicleExist = vehicle.some((vehicle) => vehicle.plate === plate );
        if(vehicleExist){
            alert('Vehicle ALrady Exist')
        }else{
            vehicle.push({category: selectedCategory, brand, model, year, plate});
            localStorage.setItem('vehicle', JSON.stringify(vehicle));
            alert('Vehicle Added Succesfuly');
            setShowVehicle(vehicle);  
            setSelectedCategory('')
            setBrand('');             
            setModel('');
            setYear('');
            setPlate('');
        }
    }

    const SelectChange = (e) => { 
        setSelectedCategory(e.target.value);
    };


    return(
        <Card>
                <CardBody>
                    <ul>
                        {showVehicle.map((vehicle, index) =>(
                            <li key={index}> {vehicle.plate} </li>
                        ))}
                    </ul>
                </CardBody>
                <FormGroup controlId="forCategory">
                        <FormLabel>Select Category</FormLabel>
                        <FormControl as="select" value={selectedCategory} onChange={SelectChange} required>
                            <option value="">Select a category</option>
                            {category.map((cat, index) => (
                                <option key={index} value={cat.category}>{cat.category}</option>
                            ))}
                        </FormControl>
                    </FormGroup>
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
                        <div className="button-Menu" style={{marginLeft : '8px' , marginTop: '20px'}}>
                            <Button   type="submit" >
                                Add Vehicle
                            </Button>
                            <Button  variant="primary" onClick={onBackToMenu}>
                                Back To Vehicle Menu
                            </Button>   
                        </div>
                    </Form>

                </CardBody>
        </Card>
    );
};

export default AddVehicle;