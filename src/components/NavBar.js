import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';


class NavBar extends React.Component {
    render(){         
        
        return (
            <Nav className="mt-2 mb-3">        
                <Nav.Item>
                    <Link className="btn btn-info" to="/favorites">Favorites</Link>
                </Nav.Item>
            </Nav>
        );
    }

}

export default NavBar;