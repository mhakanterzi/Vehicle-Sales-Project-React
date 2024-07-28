import React, { useEffect, useState } from "react";
import { Button, Card, CardBody, CardTitle } from "react-bootstrap";

const DeleteCustomer =({onBackToMenu}) =>{
    const[users, setUsers]=useState([]);

    useEffect(()=>{
        const storedusers = JSON.parse(localStorage.getItem('users')) || [];
        setUsers(storedusers)
    }, []);

    const deleteCustomer =(userToDelete) => {
        const selectedUser = users.filter(user =>
            user.name !== userToDelete.name ||
            user.surname !== userToDelete.surname ||
            user.phone !== userToDelete.phone ||
            user.email !== userToDelete.email ||
            user.password !== userToDelete.password
        )
        localStorage.setItem('users', JSON.stringify(selectedUser));
        setUsers(selectedUser);
    }
 
    return(
        <Card style={{ width: '90%', maxWidth: '50%', margin: 'auto', padding: '20px', marginTop: '20px' }}>
            <CardBody>
                <CardTitle>Edit Customer</CardTitle>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom : '20px'}}>
                    <div style={{ flex: 1, textAlign: 'center' }}> Name</div>
                    <div  style={{ flex: 1, textAlign: 'center' }}>Surname</div>
                    <div  style={{ flex: 1, textAlign: 'center' }}>Phone</div>
                    <div  style={{ flex: 1, textAlign: 'center' }}>Email</div>
                    <div  style={{ flex: 1, textAlign: 'center' }}> </div>
                </div>
                <ul style={{listStyleType: 'none', padding :0}}>
                {users.map((user, index) => (
                    <li key={index}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div  style={{ flex: 1, textAlign: 'center' }}>{user.name}</div>
                            <div  style={{ flex: 1, textAlign: 'center' }}>{user.surname}</div>
                            <div  style={{ flex: 1, textAlign: 'center' }}>{user.phone}</div>
                            <div  style={{ flex: 1, textAlign: 'center' }}>{user.email}</div>
                                <Button variant='danger' onClick={() => deleteCustomer(user)}>
                                    Delete
                                </Button>
                        </div>
                    </li>
                    ))}
                </ul>
                <Button onClick={onBackToMenu} style={{display: 'flex' ,height:'60px', width:'160px', marginLeft:'210px' }}>
                    Back To Customer Menu
                </Button>
            </CardBody>
        </Card>
    )
}

export default DeleteCustomer;