import React from "react";
import { Button, Card, CardBody, CardTitle } from "react-bootstrap";

const DeleteCustomer =({onBackToMenu}) =>{
    return(
        <Card>
            <CardBody>
                <CardTitle>Edit Customer</CardTitle>
                <Button onClick={onBackToMenu}>
                    Back To Customer Menu
                </Button>
            </CardBody>
        </Card>
    )
}

export default DeleteCustomer;