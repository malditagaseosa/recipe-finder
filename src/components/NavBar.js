import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';


class NavBar extends React.Component {
    render(){         
        
        return (
            <Nav>        
                <Nav.Item>
                    <Link to="/favorites">Favorites</Link>
                </Nav.Item>
            </Nav>
        );
    }

}

export default NavBar;