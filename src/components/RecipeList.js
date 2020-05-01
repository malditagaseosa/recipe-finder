import React from 'react';
import RecipeItem from './RecipeItem';
import { connect } from 'react-redux';


class RecipeList extends React.Component {
    render() {        
        return (
            this.props.recipes.map((recipe, index) => {
                return (
                    <RecipeItem 
                        key={ index } 
                        recipe={ recipe }
                        favoriteBtn={ true } 
                    />
                )
            })
        );
    }

}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, null)(RecipeList);