import React from 'react'
import {Badge, Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import { FaShoppingCart, FaUser} from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, useDispatch} from 'react-redux';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
import { useNavigate } from 'react-router-dom';

function Header() {
    const { cartItems } = useSelector((state) => state.cart);
    const { userInfo } = useSelector((state) => state.auth);
    const [logoutApiCall] = useLogoutMutation();

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const logoutHandler = async () => {
        try {
            await logoutApiCall().unwrap();
            dispatch(logout());
            navigate('/login')
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div>
        <header>
            <Navbar bg='dark' variant='dark' expand="md" collapseOnSelect>
                <Container>
                    <LinkContainer to='/' >
                    <Navbar.Brand>Techshop</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ms-auto'>
                            <LinkContainer to={'/cart'}>
                            <Nav.Link><FaShoppingCart />Cart
                            {
                                cartItems.length > 0 && (
                                    <Badge
                                    pill
                                    bg='success'
                                    style={{marginLeft: '5px'}}
                                    >
                                        {cartItems.reduce((a,c) => a + c.qty, 0)}
                                    </Badge>
                                )
                            }
                            </Nav.Link>
                            </LinkContainer>
                            {
                                userInfo ? (
                                    <NavDropdown title={userInfo.name} id='username'>
                                        <LinkContainer to='/profile'>
                                            <NavDropdown.Item>profile</NavDropdown.Item>
                                        </LinkContainer>
                                        <NavDropdown.Item onClick={logoutHandler}>
                                            logout
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    
                                ) : (
                                      <LinkContainer to = { '/login' }>
                            <Nav.Link><FaUser />Sign-in</Nav.Link>
                      </LinkContainer>
                                )
                            }
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    </div>
  )
}

export default Header
