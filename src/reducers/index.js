import { combineReducers } from 'redux';
import { SET_RECIPES, FAVORITE_RECIPE, UNFAVORITE_RECIPE } from '../actions';

function recipes(state = [], action) {
    switch (action.type) {
        case SET_RECIPES:
            return action.items;
        case UNFAVORITE_RECIPE:
        case FAVORITE_RECIPE:
            return state.map((recipe) => {
                if (recipe.title.toString() === action.recipe.title.toString()) {
                    return {
                        ...recipe,
                        favorite: !recipe.favorite
                    }
                }
                return recipe;            
            });        
        default:
            return state;
    }
}

function favoriteRecipes(state = [], action) {
    switch (action.type) {
        case FAVORITE_RECIPE:            
            state = [...state, action.recipe];            
            return state;
        case UNFAVORITE_RECIPE:            
            return state.filter((recipe) => {
                return (recipe.title.toString() !== action.recipe.title.toString());                                
            });
        default:
            return state;
    }
}

const rootReducer = combineReducers({ recipes, favoriteRecipes });

export default rootReducer;