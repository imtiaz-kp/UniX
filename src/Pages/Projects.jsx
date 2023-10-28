import React from 'react'
import Header from '../Components/Header'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../Components/ProjectCard'

function Projects() {
  return (
   
   <>
   <Header  />
   <div style={{marginTop:'100px'}} className='projects mb-4'>
    <h1 className='text-center mb-5'>All Projects</h1>
    <div className='d-flex justify-content-center align-items-center w-100'>
      <div className='d-flex border w-50 rounded'>
        <input type="text" className='form-control' placeholder='Search Projects by Technologies used' /><i style={{marginLeft:'-80px'}} className="fa-solid fa-magnifying-glass fa-rotate-90"></i>

      </div>
    </div>
    <Row className="mt-5 container-fluid">
      <Col sm={12} md={6} lg={4}>
       <ProjectCard />
       
      </Col>
    </Row>
   </div>
   </>
  )
}

export default Projects