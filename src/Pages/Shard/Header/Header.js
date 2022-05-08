import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import { FaEnvelope, FaPhone, FaUser, FaFacebook, FaGithub, FaLinkedin, FaStreetView, FaHome, FaBlog, FaListAlt, FaArrowAltCircleRight } from 'react-icons/fa'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebaseInit';
import { signOut } from 'firebase/auth';



const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <>
            <div className='navigation_Container pt-3 align-items-center d-none d-sm-block d-lg-block'>
                <div className=' navItem_Container container d-flex  align-items-center justify-content-between '>
                    <div className="w-50 d-flex m-0 p-0 justify-content-between">
                        <p className='mb-0'> <FaPhone className='me-1 ' /> +8801644196242</p>
                        <p className='mb-0'> <FaEnvelope className='me-1 ' /> mahbub.programing.hero@gmail.com</p>
                    </div>
                    <div className='pe-2'>
                        <Link className='social_Icon' to='#'><FaFacebook className='fs-4 ms-4 icon  ' /></Link>
                        <Link className='social_Icon' to='#'><FaGithub className='fs-4 ms-4 icon  ' /></Link>
                        <Link className='social_Icon' to='#'><FaLinkedin className='fs-4 ms-4 icon  ' /></Link>
                        <Link className='social_Icon' to='#'><FaStreetView className='fs-4 ms-4 icon  ' /></Link>

                    </div>
                </div>
            </div>
            <hr className='m-0 p-0 bg-dark' />

            <div className='sticky-top navBar_Container '>
                <Navbar collapseOnSelect expand="lg" variant='dark' >
                    <Container>
                        <Navbar.Brand as={Link} to="/home"><h3 className='navbar_Title'>All-In-One</h3></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                {
                                    user ? <>
                                        <Nav.Link className='nav_Items py-0 me-2' href="/"> <FaHome className='mb-1 me-1'></FaHome> Home</Nav.Link>
                                        <Nav.Link className='nav_Items py-0 me-2' as={Link} to="/item"><FaListAlt className='mb-1 me-1'></FaListAlt> Items</Nav.Link>
                                        <Nav.Link className='nav_Items py-0 me-2' as={Link} to="/manage"> Manage-Item</Nav.Link>
                                        <Nav.Link className='nav_Items py-0 me-2' as={Link} to="/add"> Add-Item</Nav.Link>
                                        <Nav.Link className='nav_Items py-0 me-2' as={Link} to="/myItem"> My-Item</Nav.Link>
                                        <Nav.Link className='nav_Items py-0 me-2' as={Link} to="/blogs"> <FaBlog className='mb-1 me-1'></FaBlog> Blogs</Nav.Link>
                                    </> : <>
                                        <Nav.Link className='nav_Items py-0 me-2' href="/"> <FaHome className='mb-1 me-1'></FaHome> Home</Nav.Link>
                                        <Nav.Link className='nav_Items py-0 me-2' as={Link} to="/blogs"> <FaBlog className='mb-1 me-1'></FaBlog> Blogs</Nav.Link>
                                    </>
                                }
                            </Nav>
                            <Nav>
                                <Nav.Link className='fs-5 ' as={Link} to="/about">About</Nav.Link>
                                {
                                    user ? <Nav.Link onClick={handleSignOut} className='fs-5' eventKey={2} href="#memes"> <FaArrowAltCircleRight className='mb-1 me-1'></FaArrowAltCircleRight>
                                        LogOut
                                    </Nav.Link> : <Nav.Link className='fs-5' as={Link} to="/login"> <FaUser className='mb-1 me-1'></FaUser>
                                        LogIn
                                    </Nav.Link>
                                }


                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    );
};

export default Header;