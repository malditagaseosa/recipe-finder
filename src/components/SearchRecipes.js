import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
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

    searchInFavorites(text = "", array = []) {        
        let r = false;
        array.forEach(element => {            
            if (element.title.toString() === text.toString()) {
                r = true;
            }
        });
        return r
    }

    search() {
        let { ingredients, dish } = this.state;
        const url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`;
        
        fetch(url, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(json => {            
            let result = json.results.map((recipe, i, a) => {
                recipe.favorite = this.searchInFavorites(recipe.title.toString(), this.props.favorites);
                return recipe;
            });
            this.props.setRecipes(result);
        });
    }

    render(){
        return (
            <Form>
                <Row>
                    <Col>
                        <Row>
                            <Form.Group>
                                <Form.Label className="ml-0 mb-1">Ingredients</Form.Label>
                                <Form.Control
                                    onChange={ event => { this.setState({ingredients: event.target.value}) } } 
                                    type="text" 
                                    placeholder="garlic, chicken" />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group>
                                <Form.Label className="ml-0 mb-1">Dish</Form.Label>
                                <Form.Control
                                    onChange={ event => { this.setState({dish: event.target.value}) } } 
                                    type="text" 
                                    placeholder="adobo" />
                            </Form.Group>
                        </Row>
                    </Col>                    
                </Row>                
                <Row>
                    <Button className="ml-0" onClick={ event => { event.preventDefault(); this.search() } }>Search</Button>                  
                </Row>                                
            </Form>
        );
    }
}

export default connect(null, { setRecipes })(SearchRecipes);
