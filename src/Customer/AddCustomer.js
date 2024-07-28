import React from "react";
import { Button, Card, CardBody, CardTitle } from "react-bootstrap";

const AddCustomer = ({onBackToMenu}) =>{
    return(
        <Card>
            <CardBody>
                <CardTitle>Add Customer</CardTitle>
                <Button onClick={onBackToMenu}>
                    Back To Customer Menu
                </Button>
            </CardBody>
        </Card>
    )
}

export default AddCustomer;