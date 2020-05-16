import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import SearchRecipes from './SearchRecipes';
import RecipeList from './RecipeList';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/app.css';

class App extends React.Component {
  render(){

    return (
      <Container>
        <h1>Recipe Finder</h1>
        { 
          this.props.favoriteRecipes.length > 0 ?
            <NavBar />
          : 
            '' 
        }               
        <Row>
          <Col>
            <SearchRecipes favorites={ this.props.favoriteRecipes }/>  
          </Col>
        </Row>
        <Row>
          <Col>
            <Container className="list-container">
              <RecipeList />
            </Container>
          </Col>
        </Row>                      
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, null)(App);
