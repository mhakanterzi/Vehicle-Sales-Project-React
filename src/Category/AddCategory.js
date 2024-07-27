import React, { useEffect, useState } from 'react';
import { Form, Card, Button, CardBody, CardTitle, FormGroup, FormLabel, FormControl } from 'react-bootstrap';

const AddCategory = ({ onBackToMenu, Category }) => {
    const[category, SetCategory] = useState ('');
    const[showCategories, setShowCategories] = useState([]);
    useEffect(() => {
        const storedCategory =JSON.parse(localStorage.getItem('cat')) || [];
        setShowCategories(storedCategory);
    }, []);

    const handleAddCategory = (e) =>{
        e.preventDefault();
        const cat = JSON.parse(localStorage.getItem('cat')) || [];
        const catExist = cat.some((Cat) => Cat.category === category )
        if(catExist){
            alert('Category Exist')
        }else {
            cat.push({category});
            localStorage.setItem('cat', JSON.stringify(cat));
            alert('Added Category');
            setShowCategories(cat)
            SetCategory(' ');
        }
    }

    
return(
    <Card>
        
        <CardBody>
            <CardTitle>Stored Categories</CardTitle>
            <ul>
                {showCategories.map((cat, index) => (
                    <li key={index}> {cat.category }</li>
                ))}
            </ul>           
        </CardBody>

        <CardBody>
            <CardTitle>Add Category</CardTitle>
            <Form onSubmit={handleAddCategory}>
                <FormGroup>
                    <FormLabel>Category </FormLabel>
                    <FormControl type="Text"  value={category} onChange={(e) => SetCategory(e.target.value)} required>
                    </FormControl>
                </FormGroup>
                <div className='button-Menu' style={{marginTop :'15px', marginLeft:'9px' }}>
                <Button type='submit'>
                    Add Category
                </Button>
                <Button variant="primary" onClick={onBackToMenu}>
                Back To Main Menu
            </Button>
            </div>
            </Form>
        </CardBody>
    </Card>
);
};

export default AddCategory;