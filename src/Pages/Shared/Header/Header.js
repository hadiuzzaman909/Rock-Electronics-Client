import logo from '../../../Images/logo.jpg';
import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';
const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar className='sticky header' sticky="top" collapseOnSelect expand="lg" bg="" variant="dark">
                <Container className=''>
                    <Nav.Link href='home'>
                        <img className='rounded-circle ' height={'40px'} src={logo} alt=''/>
                    </Nav.Link>
                    <Nav.Link className='navbarText text-dark fw-bold title-head' href="home"  as={Link} to="/home">Rock Electronics</Nav.Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto navbarText side-section">
                            </Nav>
                            <Nav>
                            {
                                user?<Nav.Link className='navbarText text-dark fw-bold ' as={Link} to="/home">Home</Nav.Link>:<Nav.Link className='navbarText text-dark fw-bold' as={Link} to="/home">Home</Nav.Link>
                            }
                            </Nav>
                            <Nav>
                            {
                                user?<Nav.Link className='navbarText text-dark fw-bold ' as={Link} to="/home">Blogs</Nav.Link>:<Nav.Link className='navbarText text-dark fw-bold ' as={Link} to="/home">Blog</Nav.Link>
                            }
                            </Nav>

                            <Nav>
                            {
                                user?<Nav.Link className='navbarText text-dark fw-bold ' as={Link} to="/manageInventory">Inventory</Nav.Link>:<p></p>
                            }
                            </Nav>
                            <Nav>
                            {
                                user?<Nav.Link className='navbarText text-dark fw-bold ' as={Link} to="/addNew">Add Items</Nav.Link>:<p></p>
                            }
                            </Nav>
                            <Nav>
                            {
                                user?<Nav.Link className='navbarText text-dark fw-bold ' as={Link} to="/myItem">My Items</Nav.Link>:<p></p>
                            }
                            </Nav>

                            <Nav>
                            {
                                user ?<button className='navbarText text-dark fw-bold btn btn-link sign-out text-dark text-decoration-none ' onClick={handleSignOut}>Sign Out</button>:
                                <Nav.Link className='navbarText text-dark fw-bold ' as={Link} to="/login">
                                Login</Nav.Link>
                            }
                            </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;