import React, { Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Container
} from 'reactstrap';

import {Link} from 'react-router-dom';

class AppNavbar extends Component {
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen})
    } 
    render() {
        return (
        <div>
            <Navbar color="dark" dark expand="sm" className="mb-5">
             <Container>
                <NavbarBrand><Link to='/' className="text-success text-decoration-none">Today Is</Link></NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ms-auto" navbar>
                  <NavItem>
                   <Link to='/portfolio' className="text-white text-decoration-none p-3">Portfolio</Link>
                  </NavItem>
                  <NavItem>
                    <Link to='/about' className="text-white text-decoration-none p-3">About</Link>
                  </NavItem> 
                  </Nav>
                </Collapse>
             </Container>  
            </Navbar>
        </div>
        );
    }
}

export default AppNavbar;