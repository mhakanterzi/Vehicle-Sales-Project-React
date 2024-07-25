import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardTitle, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap';

const EditCategory = ({ onBackToMenu }) => {
    const[editCategories, setEditCategories] = useState([]);
    const[newCategory, setNewCategory] = useState(' ');
    const[selectedCategory, setSelectedCategory] = useState([]);

    useEffect( () => {
        const storedCategories =JSON.parse(localStorage.getItem('cat')) || [];
        setEditCategories(storedCategories)
    },[]) ;

    const handleEditCategory = (e) =>{
        e.preventDefault();

        const updateCategories = editCategories.map(cat => 
            cat.category === selectedCategory ? {...cat, category : newCategory} : cat);
        localStorage.setItem('cat', JSON.stringify(updateCategories));
        setEditCategories(updateCategories);
        setSelectedCategory('');
        setNewCategory('');
}
    const handleSelectedCategory = (category) => {
        setSelectedCategory(category);
        setNewCategory(category);
    };

    return(
        <Card>
            <CardBody>
                <CardTitle>Edit Categoru</CardTitle>

                <Form onSubmit={handleEditCategory} >
                    <FormGroup>
                        <FormLabel>Edit Category</FormLabel>
                            <ul>
                                {editCategories.map((cat, index) => (
                                    <li key={index}>
                                        {cat.category}
                                        <Button variant='link' onClick={() => handleSelectedCategory(cat.category)}>
                                            Update
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                            </FormGroup> 

                            <FormLabel>Edit Category</FormLabel>
                            <FormControl
                                type='text' value={newCategory} onChange={(e) => setNewCategory(e.target.value)}/>
                                <div className='button-Menu' style={{marginLeft : '8px' , marginTop: '20px'}}>
                            <Button type='submit' variant='primary'>
                                Update Category
                            </Button>
                            <Button onClick={onBackToMenu}>
                                Back To Category Menu
                            </Button>
                            </div>                   
                </Form>
            </CardBody>
        </Card>
    )
}

export default EditCategory;