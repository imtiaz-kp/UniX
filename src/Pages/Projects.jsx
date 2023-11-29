import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../Components/ProjectCard'
import { allProjectsAPI } from '../Services/allAPI'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
function Projects() {
  const [token,setToken]=useState("")
  const [searchKey,setSearchKey]=useState("")
  const [allProjects,setAllProjects]=useState([])
  const getAllProjects=async()=>{
    if(sessionStorage.getItem("token")){
      const token=sessionStorage.getItem("token")
      setToken(token)
      const reqHeader={
        "Content-Type":"application/json","Authorization":`Bearer ${token}`
      }
      const result =await allProjectsAPI(searchKey,reqHeader)
      if(result.status===200){
        setAllProjects(result.data)
      }else{
        toast.error(result)
      }
      
    }
  }
  useEffect(()=>{
    getAllProjects()

  },[searchKey])
 
  return (
   
   <>
   <Header  />
   <div style={{marginTop:'100px'}} className='projects mb-4'>
    <h1 className='text-center mb-5'>All Projects</h1>
    <div className='d-flex justify-content-center align-items-center w-100'>
      <div className='d-flex border w-50 rounded'>
        <input type="text" className='form-control' placeholder='Search Projects by Technologies used'  onChange={e=>setSearchKey(e.target.value)} /><i style={{marginLeft:'-80px'}} className="fa-solid fa-magnifying-glass fa-rotate-90"></i>

      </div>
    </div>
   { token?<Row className="mt-5 container-fluid p-4">
     {allProjects?.length>0?allProjects?.map(project=>( 
     <Col sm={12} md={6} lg={4}>
      <ProjectCard project={project}/>
       
      </Col>)):<p style={{fontSize:'30px'}} className='fw-bolder text-danger m-5 text-center'>No Results</p>
      }
    </Row>:<div><p style={{fontSize:'60px'}} className='fw-bolder text-danger m-5 text-center'>Please Login To view all Projects!!!</p></div>
 } </div>
   </>
  )
}

export default Projects