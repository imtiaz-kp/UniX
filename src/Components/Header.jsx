import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Navbar style={{backgroundColor:'rgb(106, 27, 154)'}}>
        <Container>
          <Navbar.Brand>
         <Link to={'/'} style={{textDecoration:'none',color:'white'}} className='fw-bolder fs-4 '> <i className="fa-brands fa-stack-overflow fa-bounce"></i> UniX</Link>
         
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header