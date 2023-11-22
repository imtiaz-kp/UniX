import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header({insideHeader}) {
  return (
    <Navbar style={{backgroundColor:'rgb(106, 27, 154)'}}>
        <Container>
          <Navbar.Brand>
         <Link to={'/'} style={{textDecoration:'none',color:'white'}} className='fw-bolder fs-4 '> <i className="fa-brands fa-stack-overflow fa-bounce"></i> UniX</Link>
         
          </Navbar.Brand>
          { insideHeader &&
            <div className='btn btn-links-auto text-info fw-bolder fs-5' >Logout<i className="fa-regular fa-right-from-bracket " ></i></div>
          }
        </Container>
      </Navbar>
  )
}

export default Header