import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchRecipes from './SearchRecipes';
import RecipeList from './RecipeList';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/app.css';

class App extends React.Component {
  render(){

    let favoritesLink = '';

    if (this.props.favoriteRecipes.length > 0) {
      favoritesLink = (
        <Nav>        
          <Nav.Item>
            <Link to="/favorites">Favorites</Link>
          </Nav.Item>
        </Nav>
      )
    }

    return (
      <Container>
        <h1>Recipe Finder</h1>
        { favoritesLink }               
        <Row>
          <Col>
            <SearchRecipes />  
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
