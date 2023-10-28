import React, { useState } from 'react'
import { Card, Col, Modal, Row } from 'react-bootstrap'
import projectImg from '../Assests/pro.png'

function ProjectCard() {
    const [show,setShow]=useState(false);
    const handleClose=()=>setShow(false)
    const handlleShow=()=>setShow(true)
  return (
    <> <Card className='shadow mb-5  btn ' onClick={handlleShow}>
    <Card.Img variant="top" src={projectImg} />
    <Card.Body>
      <Card.Title>Project Title</Card.Title>
    </Card.Body>
  </Card>
  
  <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col md={6}>
                <img className='img-fluid' style={{height:'200px'}} src={projectImg} alt="project image" />
                </Col>
                <Col md={6}>
                    <h2>Project Title</h2>
                    <p>Project Overview : Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aspernatur sed ipsa accusamus reiciendis
                         repellendus dignissimos v
                        oluptatum, adipisci cupiditate molestiae, aperiam veritatis asperiores ut officiis voluptatibus non in quisquam incidunt.</p>
                    <p>Lnguage Used: <span className='fw-bolder'>HTML,CSS,React</span></p>
                    
                </Col>
                <div className="mt-3">
                    <a href="https://github.com/imtiaz-kp/e-cart" target='_balnk' className='me-3 btn'><i className="fa-brands fa-github fa-2x"></i></a>
                    <a href="https://e-cart-mi.vercel.app/" target='_balnk' className='me-5 btn'><i className="fa-solid fa-link fa-2x"></i></a>

                </div>
            </Row>
        </Modal.Body>
      </Modal>
  </>
  )
}

export default ProjectCard