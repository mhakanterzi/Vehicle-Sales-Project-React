import React, { useEffect, useState } from "react";
import { Button, Card, CardBody, CardTitle, Form, FormGroup,FormLabel,FormControl } from "react-bootstrap";

const EditCustomer =({onBackToMenu}) =>{
    const[newName, setNewName]= useState('');
    const[newSurname, setNewSurname]= useState(' ');
    const [newPhone, setNewPhone]= useState('');
    const [newEmail, setNewEmail]= useState('');
    const[updateUsers, setUpdateUser]= useState([])
    const[selectedEmail, setSelectedEmail]= useState('')

    useEffect(()=>{
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        setUpdateUser(storedUsers);
    }, []);

    const selectEmail = (e) =>{
        const email = e.target.value;
        setSelectedEmail(email)

        const users = updateUsers.find(u => u.email === email)
        if(users){
            setNewName(users.name);
            setNewSurname(users.surname);
            setNewPhone(users.phone);
            setNewEmail(users.email);
        }
    }

    const handleUpdateUsers =(e) => {
        e.preventDefault();

        const updatedUsers = updateUsers.map(u =>
            u.email === selectedEmail ? {name: newName, surname: newSurname, phone: newPhone, email: newEmail} :u);

        localStorage.setItem('users', JSON.stringify(updatedUsers))
        alert('Ussers Updated Succesfuly')

    }

    return(
        <Card>
            <CardBody>
                <CardTitle>Edit Customer</CardTitle>
                <Form onSubmit={handleUpdateUsers}>
                    <FormGroup controlId="forSelectVehicle">
                        <FormLabel>Select Vehicle</FormLabel>
                        <FormControl as="select" value={selectedEmail} onChange={selectEmail} required>
                            <option value="">Select a vehicle</option>
                            {updateUsers.map((user, index) => (
                                <option key={index} value={user.email}>{user.email}</option>
                            ))}
                        </FormControl>
                    </FormGroup>

                    {selectedEmail && (
                        <>
                            <FormGroup controlId="forNewName">
                                <FormLabel>Name</FormLabel>
                                <FormControl
                                    type="text"
                                    value={newName}
                                    onChange={(e) => setNewName(e.target.value)}
                                    required
                                />
                            </FormGroup>
                            <FormGroup controlId="forNewSurname">
                                <FormLabel>Surname</FormLabel>
                                <FormControl
                                    type="text"
                                    value={newSurname}
                                    onChange={(e) => setNewSurname(e.target.value)}
                                    required
                                />
                            </FormGroup>
                            <FormGroup controlId="forNewPhone">
                                <FormLabel>Phone</FormLabel>
                                <FormControl
                                    type="number"
                                    value={newPhone}
                                    onChange={(e) => setNewPhone(e.target.value)}
                                    required
                                />
                            </FormGroup>
                            <FormGroup controlId="forNewEmail">
                                <FormLabel>Email</FormLabel>
                                <FormControl
                                    type="text"
                                    value={newEmail}
                                    onChange={(e) => setNewEmail(e.target.value)}
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
    )
}

export default EditCustomer;