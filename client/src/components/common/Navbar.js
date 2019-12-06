import React, { useState } from 'react';
import SearchBox from './SearchBox';
import { 
    Collapse, 
    Navbar, 
    NavbarToggler, 
    NavbarBrand, 
    Nav, 
    NavItem, 
    NavLink 
} from 'reactstrap';
import { useDispatch } from 'react-redux';
import { setSearchField } from '../../actions/searchActions'
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AppNavBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const dispatch = useDispatch();

  const boundOnSearchChange = (event) => dispatch(setSearchField(event.target.value));

  const toggleNavbar = () => setCollapsed(!collapsed);
  const history = useHistory();

  function goTomain() {
    if(history.location.pathname === '/product-details') {
      history.push('/', '');
    }  
    else {
      history.push('/', '');
      window.location.reload();
    } 
  }

  return (
    <div>
      <Navbar color="dark" dark expand="sm">
        <div onClick={goTomain} style={{cursor:'pointer'}}className="mr-auto"><img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0_my0cq7CcE3hnrnLPdWLy7Mt1nTV6JTtjFlVJShU3Eq8E274&s" 
        alt="brand" width="200px" height="100px"/></div>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="ml-auto" navbar style={{display:'block'}}>
            <NavItem className="mb-2">
              <Link className='link-style' to="/auth">Admninistrador</Link>
            </NavItem>
            <NavItem>
              <SearchBox searchChange={boundOnSearchChange}/>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default AppNavBar;