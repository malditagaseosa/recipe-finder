import React from 'react';
import { connect } from 'react-redux';
import RecipeItem from './RecipeItem';
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Title from './Title';

class FavoriteRecipeList extends React.Component {
    render() {
        return (
            <Container>
                <Title />
                <Nav>
                    <Nav.Item>
                        <Link className="btn btn-info" to="/">Home</Link>
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