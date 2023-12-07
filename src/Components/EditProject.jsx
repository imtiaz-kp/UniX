import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useContext, useEffect, useState } from 'react';
import { BASE_URL } from '../Services/baseurl';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { editProjectAPI } from '../Services/allAPI';
import { editProjectResponsContext } from '../Contexts/ContextShare';

function EditProject({ Project }) {
  const { editProjectRespons, setEditProjectResponse } = useContext(editProjectResponsContext);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setProjectDetails({
      id: Project._id,
      title: Project.title,
      languages: Project.languages,
      overview: Project.overview,
      github: Project.github,
      website: Project.website,
      projectImage: ""
    });
    setPreview("");
  };
  const handleShow = () => setShow(true);
  const [preview, setPreview] = useState("");

  const [projectDetails, setProjectDetails] = useState({
    id: Project._id,
    title: Project.title,
    languages: Project.languages,
    overview: Project.overview,
    github: Project.github,
    website: Project.website,
    projectImage: ""
  });

  const handleUpdate = async () => {
    const {id,title,languages,github,website,overview,projectImage}=projectDetails
    if(!title||!languages||!overview||!github||!website){
        toast.info("please fill the form completely!!!")
      }else{
        const reqBody= new FormData()
        reqBody.append("title",title)
        reqBody.append("languages",languages)
        reqBody.append("overview",overview)
        reqBody.append("github",github)
        reqBody.append("website",website)        
        preview?reqBody.append("projectImage",projectImage):reqBody.append("projectImage",Project.projectImage)
        const token = sessionStorage.getItem("token")
        if(preview){
            const reqHeader={
                "Content-Type":"multipart/form-data",
                "Authorization":`Bearer ${token}`
            }
            //api call
            const result= await editProjectAPI(id,reqBody,reqHeader)
            if(result.status===200){
              handleClose()
              //pass response to my projects
              setEditProjectResponse(result.data)
            }else{
               
                 toast.error(result.response.data)
                
            }

        }else{
            const reqHeader={
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
            //api call
            const result= await editProjectAPI(id,reqBody,reqHeader)
            if(result.status===200){
              handleClose()
              //pass response to my projects
              setEditProjectResponse(result.data)
            }else{
           
                 toast.error(result.response.data)
                 
            }
        }
      }
  

  };

  useEffect(() => {
    if (projectDetails.projectImage) {
      setPreview(URL.createObjectURL(projectDetails.projectImage));
    }
  }, [projectDetails.projectImage]);

  return (
    
         <>
      <button onClick={handleShow} className='btn'><i className='fa-solid fa-pen-to-square fa-2x'></i></button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        size='lg'
        centered
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className='col-lg-6'>
              <label>
                <input type="file" style={{ display: 'none' }} onChange={e => setProjectDetails({ ...projectDetails, projectImage: e.target.files[0] })} />
                <img className='img-fluid' src={preview ? preview : `${BASE_URL}/uploads/${Project.projectImage}`} alt="project picture" />
              </label>
            </div>
            <div className='col-lg-6'>
              <div className='mb-3'>
                <input type="text" className='form-control' placeholder='Project Title' value={projectDetails.title} onChange={e => setProjectDetails({ ...projectDetails, title: e.target.value })} />
              </div>
              <div className='mb-3'>
                <input type="text" className='form-control' placeholder='Languages Used' value={projectDetails.languages} onChange={e => setProjectDetails({ ...projectDetails, languages: e.target.value })} />
              </div>
              <div className='mb-3'>
                <input type="text" className='form-control' placeholder='Github Link' value={projectDetails.github} onChange={e => setProjectDetails({ ...projectDetails, github: e.target.value })} />
              </div>
              <div className='mb-3'>
                <input type="text" className='form-control' placeholder='Website Link' value={projectDetails.website} onChange={e => setProjectDetails({ ...projectDetails, website: e.target.value })} />
              </div>
              <div className='mb-3'>
                <textarea className='form-control' placeholder='Project Overview' value={projectDetails.overview} onChange={e => setProjectDetails({ ...projectDetails, overview: e.target.value })}></textarea>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpdate}>Update</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-right' autoClose={2000} theme='colored' />
    </>
  );
}

export default EditProject;
