import React, {useEffect, useState} from "react";
import { Button, Card, CardBody, CardTitle } from "react-bootstrap";
import AddPrice from './AddPrice';

const AllVehicles = ({onBackToMenu}) =>{
    const[showVehicle, setShowVehicle] = useState([]);
    const [selectedVehicle, setSelectedVehicle] = useState(null);


    useEffect(() => {
        const storedVehice = JSON.parse(localStorage.getItem('vehicle'));
        setShowVehicle(storedVehice)
    }, []);

    const addOnSale = (vehicle, price) => {
        const onSaleVehicles = JSON.parse(localStorage.getItem('vehicleOnSale')) || [];
        const vehicleExist = onSaleVehicles.some(v => v.plate === vehicle.plate);

        if (vehicleExist) {
            alert('Vehicle is already on sale');
        } else {
            const vehicleWithPrice = { ...vehicle, price };
            onSaleVehicles.push(vehicleWithPrice);
            localStorage.setItem('vehicleOnSale', JSON.stringify(onSaleVehicles));
            alert('Vehicle added to sale');
        }
    };
    return(
        <Card style={{ width: '90%', maxWidth: '50%', margin: 'auto', padding: '20px', marginTop: '20px' }}>
            <CardBody>
                <CardTitle>All Vehicles</CardTitle>
                <div style={{display:'flex', justifyContent :'space-between', marginBottom:'10px'}}>
                    <div style={{display:'flex', justifyContent :'space-between', alignItems:'center'}}>Category</div>
                    <div style={{display:'flex', justifyContent :'space-between', alignItems:'center'}}>Brand</div>
                    <div style={{display:'flex', justifyContent :'space-between', alignItems:'center'}}>Model</div>
                    <div style={{display:'flex', justifyContent :'space-between', alignItems:'center'}}>Year</div>
                    <div style={{display:'flex', justifyContent :'space-between', alignItems:'center'}}>Plate</div>
                    <div style={{display:'flex', justifyContent :'space-between', alignItems:'center'}}>Case</div>
                </div>
                <ul style={{listStyleType: 'none', padding :0}}>
                {showVehicle.map((vehicle, index) => (
                    <li key={index}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div  style={{ flex: 1, textAlign: 'center' }}>{vehicle.category}</div>
                            <div  style={{ flex: 1, textAlign: 'center' }}>{vehicle.brand}</div>
                            <div  style={{ flex: 1, textAlign: 'center' }}>{vehicle.model}</div>
                            <div  style={{ flex: 1, textAlign: 'center' }}>{vehicle.year}</div>
                            <div  style={{ flex: 1, textAlign: 'center' }}>{vehicle.plate}</div>
                            <Button variant='link'  onClick={() => setSelectedVehicle(vehicle)}>
                                Sale
                            </Button>
                        </div>
                    </li>
                    ))}
                </ul>
                <Button onClick={onBackToMenu}>
                    Back To Listing Menu
                </Button>
                {selectedVehicle && 
                    <AddPrice 
                        vehicle={selectedVehicle} 
                        onAddOnSale={addOnSale} 
                        onClose={() => setSelectedVehicle(null)} 
                    />
                }
            </CardBody>
        </Card>
    )
}

export default AllVehicles;