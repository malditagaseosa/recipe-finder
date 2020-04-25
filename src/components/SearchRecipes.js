import React from 'react';
import { Form, Button } from 'react-bootstrap';

class SearchRecipes extends React.Component {
    render(){
        return (
            <Form inline>
                <Form.Group>
                    <Form.Label>Ingredients</Form.Label>
                    <Form.Control type="text" placeholder="garlic, chicken" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Dish</Form.Label>
                    <Form.Control type="text" placeholder="adobo" />
                </Form.Group>
                <Button>Submit</Button>
            </Form>
        );
    }
}

export default SearchRecipes;
