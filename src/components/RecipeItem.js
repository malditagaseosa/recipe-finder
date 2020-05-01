import React from 'react';
import { Media } from 'react-bootstrap';
import { favoriteRecipe } from '../actions';
import { connect } from 'react-redux';

class RecipeItem extends React.Component {
    constructor() {
        super();

        this.state = {
            favorited: false
        }
    }

    favorite(recipe) {
        this.props.favoriteRecipe(recipe);
        this.setState({ favorited: true });
    }

    render() {
        let { recipe } = this.props;

        return (
            <Media className="list-item">
                {
                    this.props.favoriteBtn ?
                        this.state.favorited ?
                            <div className="star">{ String.fromCharCode(9733) }</div>
                        :
                            <div onClick={ () => this.favorite(recipe) } className="star">{ String.fromCharCode(9734) }</div>
                    :
                        <div></div>                                     
                }
                <img
                    className="img-fluid mr-3"
                    src={ recipe.thumbnail }
                    alt={ recipe.title }                   
                />
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
        );
    }
}

export default connect(null, { favoriteRecipe })(RecipeItem);