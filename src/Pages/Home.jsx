import React from 'react'
import { Col, Row } from 'react-bootstrap'
import titleImg from '../Assests/unix1.png'
import ProjectCard from '../Components/ProjectCard'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    {/* langing section */}
    <div style={{width:'100%',height:'100vh',backgroundColor:'rgb(106, 27, 154)' }} className='container-fluid rounded'>
      <Row className='align-items-center p-5'>
        <Col sm={23 } md={6}>
          <h1 style={{fontSize:'80px'} } className='fw-bolder text-light'> <i className="fa-brands fa-stack-overflow fa-bounce"></i> UniX </h1>
          <p style={{color:'white'}}>One Stop Destination for all sowftware development projects. where user can add and manage their 
            projects .As wll as access all projects avaliable in our website... What are waiting for!!!!</p>
            <Link to={'/login'} className='btn btn-warning'> Start to Explore <i className="fa-solid fa-right-long fa-beat ms-2"></i></Link>
        </Col>
        <Col sm={23 } md={6}>
         <img src={titleImg} alt="" style={{marginTop:'100px'}} className='w-100' />
        </Col>

      </Row>
    </div>
     {/* all projects */}
     <div className="all-projects mt-5">
      <h1 className='text-center mb-5'>Explore Our Projects</h1>
    <marquee  scrollAmount={25}>
       <Row>
        <Col sm={12} md={6} lg={4}>
         <ProjectCard/>
        </Col>
       </Row>
    </marquee>
    <div className="text-center mb-4 "><Link  to={'/projects'}> View More Projects</Link></div>

     </div>
    
    </>
  )
}

export default Home