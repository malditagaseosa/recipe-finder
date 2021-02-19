import React from 'react';
import { Media, Card } from 'react-bootstrap';
import { favoriteRecipe, unfavoriteRecipe } from '../actions';
import { connect } from 'react-redux';

class RecipeItem extends React.Component {    

    favorite(recipe) {
        if (!recipe.favorite) {
            this.props.favoriteRecipe(recipe);
        } else {
            this.props.unfavoriteRecipe(recipe);
        }       
    }

    render() {
        let { recipe } = this.props;
        return (
            <Card className="list-item">
                <Card.Body>
                    <Media>
                        {
                            this.props.favoriteBtn ?
                                <div 
                                    onClick={ () => this.favorite(recipe) } 
                                    className="star"
                                >
                                        { recipe.favorite ? String.fromCharCode(9733) : String.fromCharCode(9734) }
                                </div>                        
                            :
                                <div></div>                                     
                        }
                        {
                            recipe.thumbnail !== "" ?
                                <img
                                    className="img-fluid mr-3"
                                    src={ recipe.thumbnail }
                                    alt={ recipe.title }                   
                                />
                            :
                            ""
                        }                        
                        <Media.Body>
                            <a 
                                target="_blank" 
                                href={ recipe.href }
                                rel="noopener noreferrer"
                            >
                                <h5>{ recipe.title }</h5>
                            </a>
                            <p>{ recipe.ingredients }</p>                    
                        </Media.Body>                
                    </Media>
                </Card.Body>
            </Card>
        );
    }
}

export default connect(null, { favoriteRecipe, unfavoriteRecipe })(RecipeItem);