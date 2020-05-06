import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setRecipes } from '../actions';

class SearchRecipes extends React.Component {

    constructor(){
        super();

        this.state = {
            ingredients: '',
            dish: '',
        }
    }

    search() {
        let { ingredients, dish } = this.state;
        const url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`;
        
        fetch(url, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
            let result = json.results.map((recipe) => {
                recipe.favorite = false;
                return recipe;
            });
            this.props.setRecipes(result);
        });
    }

    render(){
        return (
            <Form inline>
                <Form.Group>
                    <Form.Label>Ingredients</Form.Label>
                    <Form.Control
                        onChange={ event => { this.setState({ingredients: event.target.value}) } } 
                        type="text" 
                        placeholder="garlic, chicken" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Dish</Form.Label>
                    <Form.Control
                        onChange={ event => { this.setState({dish: event.target.value}) } } 
                        type="text" 
                        placeholder="adobo" />
                </Form.Group>
                <Button onClick={ event => { event.preventDefault(); this.search() } }>Submit</Button>
            </Form>
        );
    }
}

export default connect(null, { setRecipes })(SearchRecipes);
