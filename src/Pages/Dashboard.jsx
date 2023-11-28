import React, { useContext, useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Col, Row } from 'react-bootstrap'
import MyProjects from '../Components/MyProjects'
import Profile from '../Components/Profile'



function Dashboard() {
  const[ username,setUsername]=useState("")
  useEffect(()=>{
    if(sessionStorage.getItem("existingUser")){
      setUsername(JSON.parse(sessionStorage.getItem("existingUser")).username)
    }
  },[])

  return (
    <>
      <>
        <Header insideHeader />
        <Row className='container-fluid mt-4' >
        <Col sm={12} md={8} lg={8}>
          {/* my project */}
  
          <h2>Welcome <span className='text-warning'>{username}</span></h2>
          <MyProjects/>
        </Col>
        <Col sm={12} md={8}  lg={4} className='mt-5'>
          {/* my profile */}
          <Profile/>
        </Col>
        </Row>
      </>
    
    </>
    )
}

export default Dashboard