import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import SearchRecipes from './SearchRecipes';
import RecipeList from './RecipeList';
import Title from './Title';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/app.css';

class App extends React.Component {
  render(){

    return (
      <Container>
        <Title />
        { 
          this.props.favoriteRecipes.length > 0 ?
            <NavBar />
          : 
            '' 
        }               
        <Row>
          <Col md={4}>
            <Container className="list-container">
              <SearchRecipes favorites={ this.props.favoriteRecipes }/>
            </Container>
          </Col>
          <Col md={8}>
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
