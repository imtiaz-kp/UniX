import React, { useContext } from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { tokenAuthorisationContext } from '../Contexts/TokenAuth';

function Header({ insideHeader }) {
  const { isAuthorized, setIsAuthorized } = useContext(tokenAuthorisationContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthorized(false);
    sessionStorage.removeItem("existingUser");
    sessionStorage.removeItem("token");
    // navigate to landing page
    navigate('/');
  };

  return (
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: 'rgb(106, 27, 154)' }} variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }} className='fw-bolder fs-4 '>
            <i className="fa-brands fa-stack-overflow fa-bounce"></i> UniX-HuB
          </Link>
        </Navbar.Brand>
        {insideHeader && (
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        )}
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          {insideHeader && (
            <Button variant="link" className='text-info fw-bolder fs-5' onClick={handleLogout}>
              Logout <i className="fa-solid fa-right-from-bracket"></i>
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
