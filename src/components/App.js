import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SearchRecipes from './SearchRecipes';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/app.css';

const array = [1,2,3,4];

function App() {
  return (
    <Container>
      <h1>Recipe Finder</h1>
      <Row>
        <Col>
          <SearchRecipes />  
        </Col>
      </Row>
      <Container>
        <Row>
          <ul>
            {array.map((value, index) => {
              return <li key={index}>{value}</li>
            })}
          </ul>
        </Row>  
      </Container>                
    </Container>
  );
}

export default App;
