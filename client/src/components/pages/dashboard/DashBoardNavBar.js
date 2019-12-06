import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../../actions/securityActions';

function DashBoardNavBar() {
    const [collapsed, setCollapsed] = useState(true);
    const dispatch = useDispatch();

    const security = useSelector(state => state.security);

    const toggleNavbar = () => setCollapsed(!collapsed);

    const boundOnLogout = () => dispatch(logout());

    function logoutUser() {
        boundOnLogout()
    }

    return(
        <Navbar className="adminNavBar" color="dark" dark expand="sm">
           <NavbarBrand>Administrador Ecommerce - {security.user.usuario} </NavbarBrand> 
           <NavbarToggler onClick={toggleNavbar} className="mr-2" />
           <Collapse isOpen={!collapsed} navbar>
               <Nav className="ml-auto" navbar>
                    <NavItem className="my-2">
                        <Link
                            className="nav-link btn btn-danger"
                            onClick={logoutUser}
                            to='/auth'>
                            Cerrar sesión
                        </Link>
                    </NavItem>
               </Nav>
           </Collapse>
        </Navbar>
    );
}

export default DashBoardNavBar;