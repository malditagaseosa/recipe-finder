import React from 'react';
import { connect } from 'react-redux';
import RecipeItem from './RecipeItem';
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class FavoriteRecipeList extends React.Component {
    render() {
        return (
            <Container>
                <h1>Favorite Recipes</h1>
                <Nav>
                    <Nav.Item>
                        <Link to="/">Home</Link>
                    </Nav.Item>
                </Nav>
                {                  
                    this.props.favoriteRecipes.map((recipe, index) => {
                        return (                    
                            <RecipeItem 
                                key={ index } 
                                recipe={ recipe }
                                favoriteBtn={ false } 
                            />
                        );
                    })
                }
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        favoriteRecipes: state.favoriteRecipes
    }
}

export default connect(mapStateToProps, null)(FavoriteRecipeList);