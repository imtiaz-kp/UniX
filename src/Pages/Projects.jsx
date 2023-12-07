import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import { Col, Row } from 'react-bootstrap';
import ProjectCard from '../Components/ProjectCard';
import { allProjectsAPI } from '../Services/allAPI';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Link } from 'react-router-dom';

function Projects() {
  const [token, setToken] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [allProjects, setAllProjects] = useState([]);

  const getAllProjects = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token");
      setToken(token);
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      };

      try {
        const result = await allProjectsAPI(searchKey, reqHeader);
        if (result.status === 200) {
          setAllProjects(result.data);
        } else {
          toast.error(result);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    }
  };

  useEffect(() => {
    getAllProjects();
  }, [searchKey]);

  return (
    <>
      <Header />


      <div style={{ marginTop: '100px' }} className='projects mb-4'>
        <div className='container'>
          <Row className='justify-content-center'>
            <Col xs={12} md={8} lg={6}>
             {token ?<div className='input-group'>
               
                  <span className='input-group-text'>
                    <i className="fa-solid fa-magnifying-glass fa-rotate-90 text-muted" style={{ fontSize: '1.5rem' }}></i>
                  </span>
                  <input
                    type="text"
                    className='form-control'
                    placeholder='Search Projects by Technologies used'
                    onChange={e => setSearchKey(e.target.value)}
                  />
               
              </div>: null}
            </Col>
          </Row>
        </div>
      {token ?
           
          <Row className="mt-5 container-fluid p-4 gy-4">
             <h1 className='text-center mb-5'>All Projects</h1>
            {allProjects?.length > 0 ? allProjects?.map(project => (
              <Col key={project.id} xs={12} md={6} lg={4}>
                <ProjectCard project={project} />
              </Col>
            )) :
              <p style={{ fontSize: '30px' }} className='fw-bolder text-danger m-5 text-center'>No Results</p>
            }
          </Row> :
          <div>
            <p style={{ fontSize: '30px' }} className='fw-bolder text-danger m-5 text-center'>Please Login To view all Projects!!!</p>
            <div className='text-center'>
                          <p>New User? Click here to <Link style={{textDecoration:'none',color:'green'}} to={'/register'}>Register</Link></p>
                          <p>Already have an account? Click here to <Link style={{textDecoration:'none',color:'green'}} to={'/login'}>Login</Link></p>
                        </div>

          </div>
        }
       
        

       
      </div>
      <ToastContainer position='top-right' autoClose={2000} theme='colored' />
    </>
  );
}

export default Projects;
