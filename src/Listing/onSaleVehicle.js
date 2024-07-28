import React, {useEffect, useState} from "react";
import { Button, Card, CardBody, CardTitle } from "react-bootstrap";

const OnSaleVehicle = ({onBackToMenu}) =>{
    const[onSale, setOnSale]= useState([]);

    useEffect(() => {
        const storedOnSaleVehicle = JSON.parse(localStorage.getItem('vehicleOnSale'))
        setOnSale(storedOnSaleVehicle)
    },[])
    const handleDeleteVehicle = (vehicleToDelete) =>{
        const selectedVehicle = onSale.filter(vehicle => 
            vehicle.plate !== vehicleToDelete.plate ||
            vehicle.brand !== vehicleToDelete.brand ||
            vehicle.model !== vehicleToDelete.model ||
            vehicle.year !== vehicleToDelete.year
            );
        localStorage.setItem('vehicleOnSale', JSON.stringify(selectedVehicle));
        setOnSale(selectedVehicle);
    }

    const addOnSaled = (vehicle, price) =>{
        const saledVehicles = JSON.parse(localStorage.getItem('SaledVehicle')) || [];
        const vehicleWithPrice = { ...vehicle, price };
        saledVehicles.push(vehicleWithPrice);
        localStorage.setItem('SaledVehicle', JSON.stringify(saledVehicles));

        const selectedVehicle = onSale.filter(v => 
            v.plate !== vehicle.plate ||
            v.brand !== vehicle.brand ||
            v.model !== vehicle.model ||
            v.year !== vehicle.year
            );
        localStorage.setItem('vehicleOnSale', JSON.stringify(selectedVehicle));
        setOnSale(selectedVehicle);
    }

    return(
        <Card style={{ width: '90%', maxWidth: '70%', margin: 'auto', padding: '20px', marginTop: '20px' }}>
            <CardBody>
                <CardTitle>On Sale Vehicles</CardTitle>
                <div style={{display:'flex', justifyContent :'space-between', marginBottom:'10px'}}>
                    <div style={{display:'flex', justifyContent :'space-between', alignItems:'center'}}>Category</div>
                    <div style={{display:'flex', justifyContent :'space-between', alignItems:'center'}}>Brand</div>
                    <div style={{display:'flex', justifyContent :'space-between', alignItems:'center'}}>Model</div>
                    <div style={{display:'flex', justifyContent :'space-between', alignItems:'center'}}>Year</div>
                    <div style={{display:'flex', justifyContent :'space-between', alignItems:'center'}}>Plate</div>
                    <div style={{display:'flex', justifyContent :'space-between', alignItems:'center'}}>Price</div>
                    <div style={{display:'flex', justifyContent :'space-between', alignItems:'center'}}>Saled</div>
                    <div style={{display:'flex', justifyContent :'space-between', alignItems:'center'}}>Remove</div>
                </div>
                <ul style={{listStyleType: 'none', padding :0}}>
                {onSale.map((vehicle, index) => (
                    <li key={index}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div  style={{ flex: 1, textAlign: 'center' }}>{vehicle.category}</div>
                            <div  style={{ flex: 1, textAlign: 'center' }}>{vehicle.brand}</div>
                            <div  style={{ flex: 1, textAlign: 'center' }}>{vehicle.model}</div>
                            <div  style={{ flex: 1, textAlign: 'center' }}>{vehicle.year}</div>
                            <div  style={{ flex: 1, textAlign: 'center' }}>{vehicle.plate}</div>
                            <div  style={{ flex: 1, textAlign: 'center' }}>{vehicle.price}</div>
                            <Button variant='link' style={{ color: 'green'}} onClick={() => addOnSaled(vehicle, vehicle.price)}>
                                Saled
                            </Button>
                            <Button  variant='danger' onClick={() => handleDeleteVehicle(vehicle)}>
                                Remove
                            </Button>
                        </div>
                    </li>
                    ))}
                </ul>
                <Button onClick={onBackToMenu} style={{display: 'flex' ,height:'60px', width:'160px', marginLeft:'340px' }}>
                    Back To Listing Menu
                </Button>
            </CardBody>
        </Card>
    )
}

export default OnSaleVehicle;