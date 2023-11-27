import React, { useContext } from 'react'
import { Button, Container, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { tokenAuthorisationContext } from '../Contexts/TokenAuth'

function Header({insideHeader}) {
  const {isAuthorized,setIsAuthorized}=useContext(tokenAuthorisationContext)

  const navigate=useNavigate()
  const handleLogout=()=>{
    setIsAuthorized(false)
    sessionStorage.removeItem("existingUser")
    sessionStorage.removeItem("token")
    //navigate to landing page
    navigate('/')
  }
  return (
    <Navbar style={{backgroundColor:'rgb(106, 27, 154)'}}>
        <Container>
          <Navbar.Brand>
         <Link to={'/'} style={{textDecoration:'none',color:'white'}} className='fw-bolder fs-4 '> <i className="fa-brands fa-stack-overflow fa-bounce"></i> UniX</Link>
         
          </Navbar.Brand>
          { insideHeader &&
<button className='btn btn-links-auto text-info fw-bolder fs-5' onClick={handleLogout}>
              <div>Logout <i class="fa-solid fa-right-from-bracket"></i></div>
  
</button>          }
        </Container>
      </Navbar>
  )
}

export default Header