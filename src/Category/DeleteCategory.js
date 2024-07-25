import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardTitle } from 'react-bootstrap';

const DeleteCategory = ({ onBackToMenu }) => {
    const [showCategories, setShowCategories] = useState([]) ;

    useEffect( () => {
        const storedCategories =JSON.parse(localStorage.getItem('cat')) || [];
        setShowCategories(storedCategories);
    }, [])

    const handleDeleteCategory = (categoryToDelete) =>{
        const updateCategories = showCategories.filter(cat => cat.category !== categoryToDelete);
        localStorage.setItem('cat', JSON.stringify(updateCategories));
        setShowCategories(updateCategories);
    }



    return(
        <Card>
            <CardBody>
                <CardTitle> Delete Category</CardTitle>
                <ul>
                    {showCategories.map((cat, index) => (
                        <li key ={index}  style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>                           
                            {cat.category}
                            <Button variant='danger' onClick={ () => handleDeleteCategory(cat.category)} >
                                Delete
                            </Button>
                        </li>
                    ) )}
                </ul>
                <div className='button-Menu' style={{marginLeft : '100px', marginTop : '50px' }}>
                <Button onClick={onBackToMenu}>
                    Back To Category Menu
                </Button>
                </div>
            </CardBody>
        </Card>
    )
    
};

export default DeleteCategory;