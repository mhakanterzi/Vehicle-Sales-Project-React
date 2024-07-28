import React, { useEffect, useState } from "react";
import { Button, Card, CardBody, CardTitle, Form, FormGroup, FormControl, FormLabel } from "react-bootstrap";

const ChangePassword = ({ onBackToMenu }) => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [users, setUsers] = useState([]);
    const [selectedEmail, setSelectedEmail] = useState('');

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        setUsers(storedUsers);
    }, []);

    const selectEmail = (e) => {
        const email = e.target.value;
        setSelectedEmail(email);

        const user = users.find(u => u.email === email);
        if (user) {
            setNewPassword(user.password);
            setNewPassword('')
        }
    }
    

    const handleUpdatePassword = (e) => {
        e.preventDefault();

        const user = users.find(u => u.email === selectedEmail);
        if (user && user.password === currentPassword) {
            const updatedUsers = users.map(p => 
                p.email === selectedEmail ? { ...p, password: newPassword } : p
            );

            localStorage.setItem('users', JSON.stringify(updatedUsers));
            alert('Password Updated Successfully');
        } else {
            alert('Current password is incorrect');
        }
    }
    return (
        <Card>
            <CardBody>
                <CardTitle>Change Password</CardTitle>
                <Form onSubmit={handleUpdatePassword}>
                    <FormGroup controlId="forSelectUser">
                        <FormLabel>Select User</FormLabel>
                        <FormControl as="select" value={selectedEmail} onChange={selectEmail} required>
                            <option value="">Select a user</option>
                            {users.map((p, index) => (
                                <option key={index} value={p.email}>{p.email}</option>
                            ))}
                        </FormControl>
                    </FormGroup>

                    {selectedEmail && (
                        <>
                        <FormGroup controlId="forCurrentPassword">
                            <FormLabel>Current Password</FormLabel>
                            <FormControl
                                type="password"
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                                required
                            />
                        </FormGroup>
                        <FormGroup controlId="forNewPassword">
                            <FormLabel>New Password</FormLabel>
                            <FormControl
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)} 
                                required
                            />
                        </FormGroup>
                    </>

                    )}
                    <div className='button-Menu' style={{ marginLeft: '8px', marginTop: '20px' }}>
                        <Button type="submit">Update Password</Button>
                        <Button onClick={onBackToMenu} variant="primary">
                            Back To Menu
                        </Button>
                    </div>
                </Form>
            </CardBody>
        </Card>
    );
}

export default ChangePassword;
