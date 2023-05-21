import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { AuthContext } from '../Providers/AuthProvider';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import ActiveRouter from '../Routers/ActiveRouter';

const Header = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const handelSignOut = () => {
        signOutUser()
            .then()
            .catch(error => {
                toast.error(error.message, {
                    position: toast.POSITION.TOP_CENTER
                });
            })
    }
    const navItems = <>
        { user?.email ?  <>
        <ActiveRouter to="mytoys">My Toys</ActiveRouter>
            <ActiveRouter to="addtoys">Add a Toys</ActiveRouter>
        </> 
        :''
       }
    </>
    return (
        <Navbar collapseOnSelect expand="lg" variant="light" border="danger" className='h-25' style={{backgroundColor:'lightpink'}}>
            <Container className='mt-0'>
                <Navbar.Brand href="/"><img className='w-25 h-25 rounded-circle' src="https://i.ibb.co/dfWN0KL/39b0e73a56534f51a83542cbef2b6691-1.png" alt="Website Logo" /><span className='text-danger'>Ting Tong</span><span className='text-primary'> DisneyLand</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto gap-2">
                        <ActiveRouter to='/'>Home</ActiveRouter>
                        <ActiveRouter to='/alltoys'>All Toys</ActiveRouter>
                        {navItems}
                        <ActiveRouter to='/blog'>Blog</ActiveRouter>
                    </Nav>
                    <Nav>
                        {/* tooltip used when user will hover the image icon it will show user name */}
                        { <OverlayTrigger
                                placement="right"
                                delay={{ show: 250, hide: 400 }}
                                overlay={<Tooltip id="tooltip">{user?.displayName}</Tooltip>}
                            >
                                <img src={user?.photoURL} alt="" style={{width:'45px'}} className='rounded-circle me-2' />
                             
                            </OverlayTrigger>
                        }

                        {
                             user ? <Button variant="secondary" onClick={handelSignOut}>Logout</Button> :
                            <Link to='/login'>
                                <Button variant="secondary">Login</Button>
                            </Link>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;