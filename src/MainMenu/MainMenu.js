import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import Category from '../Menu/Category';
import Vehicle from '../Menu/Vehicles';
import Customer from '../Menu/Customer';
import Listing from '../Menu/Listing'

const MainMenu = () => {
  const [showVehicle, setShowVehicle] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const [showCustomer, setShowCustomer] = useState(false);
  const [showListing, setShowListing] =useState(false);


  const handleVehicle = () => {
    setShowVehicle(true);
  };
  const handleVehicleBack = () => {
    setShowVehicle(false);
  };
  if(showVehicle){
    return <Vehicle onBackToMenu={handleVehicleBack} />;
  };


  const handleCustomer = () => {
    setShowCustomer(true);
  };
  const handleCusomerBack = () =>{
    setShowCustomer(false);
  };
  if(showCustomer){
    return <Customer onBackToMenu={handleCusomerBack} />;
  };


  const handleListing = () => {
    setShowListing(true);
  };
  const handleListingBack = () =>{
    setShowListing(false)
  }
  if(showListing){
    return <Listing onBackToMenu={handleListingBack} />
  }


  const handleCategory = () => {
    setShowCategory(true);
  };
  const handleBackToMenu = () => {
    setShowCategory(false);
  };
  if (showCategory) {
    return <Category onBackToMenu={handleBackToMenu} />;
  }

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>Main Menu</Card.Title>
        <div className="button-Menu">
          <Button variant="primary" onClick={handleCategory} className="mb-2">
            Kategori
          </Button>
          <Button variant="primary" onClick={handleVehicle} className="mb-2">
            Araç
          </Button>
        </div>
        <div className="button-Menu">
          <Button variant="primary" onClick={handleListing} className="mb-2">
            Listeleme
          </Button>
          <Button variant="primary" onClick={handleCustomer} className="mb-2">
            Müşteri
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MainMenu;
