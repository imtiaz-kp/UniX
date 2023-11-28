import React, { useContext, useEffect, useState } from 'react'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast, ToastContainer } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";
import { addProjectAPI } from '../Services/allAPI';
import { addProjectResponseContext } from '../Contexts/ContextShare';


function AddProject() {
  const {addProjectRespon,setAddProjectResponse}=useContext(addProjectResponseContext)
 const [token,setToken]=useState("")
    const [show, setShow] = useState(false);

const handleClose = () =>{ setShow(false)
  setProjectDetails({
    title:"",languages:"",overview:"",github:"",website:"",projectImage:""
  })
  setPreview("")
}

const handleShow = () => setShow(true);
const [projectDetails,setProjectDetails]=useState({
  title:"",languages:"",overview:"",github:"",website:"",projectImage:""
})
const [preview,setPreview]=useState("")
useEffect(()=>{
  if(projectDetails.projectImage){
    setPreview(URL.createObjectURL(projectDetails.projectImage))
  }

},[projectDetails.projectImage])


const hadleAdd=async(e)=>{
  e.preventDefault()
  const {title,languages,overview,projectImage,github,website}=projectDetails
  if(!title||!languages||!overview||!projectImage||!github||!website){
    toast.info("pleaxe fill the form completely!!!")
  }else{
    const reqBody=new FormData()
    reqBody.append("title",title)
    reqBody.append("languages",languages)
    reqBody.append("overview",overview)
    reqBody.append("projectImage",projectImage)
    reqBody.append("github",github)
    reqBody.append("website",website)

   if(token){ 
    const reqHeader={
      "Content-Type":"multipart/form-data",
      "Authorization":`Bearer ${token}`
    }
    const result = await addProjectAPI(reqBody,reqHeader)
    if(result.status===200){
      
      handleClose()
      alert("project added")
       setAddProjectResponse(result.data)
    }else{
     
      toast.warning(result.response.data)
    }
  }
  }

}
useEffect((e)=>{
  if(sessionStorage.getItem("token")){
    setToken(sessionStorage.getItem("token"))
  }else{
    setToken("")
  }
},[])
  return (
   <div>
        <Button variant="primary" className='btn-success' onClick={handleShow}>
            Add Projects
          </Button>
    
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            size='lg'
            centered
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title > Project Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className='row'>
               <div className='col-lg-6'>
                <label >
                  <input type="file" style={{display:'none'}} onChange={e=>setProjectDetails({...projectDetails,projectImage:e.target.files[0]})}/>
                  <img className='img-fluid' src={preview?preview:"https://www.freecodecamp.org/news/content/images/2021/08/imgTag.png"} alt="project picture" />
                </label>
               </div>
               <div className='col-lg-6 '>
              
                <div className='mb-3'>
                    <input type="text" className='form-control ' placeholder='Project Title' value={projectDetails.title} onChange={e=>setProjectDetails({...projectDetails,title:e.target.value})}/>
    
                </div>          
                <div className='mb-3'>
                    <input type="text" className='form-control ' placeholder='Languaged Used' value={projectDetails.languages} onChange={e=>setProjectDetails({...projectDetails,languages:e.target.value})} />
    
                </div>  
                <div className='mb-3'>
                    <input type="text" className='form-control ' placeholder='Github Link' value={projectDetails.github} onChange={e=>setProjectDetails({...projectDetails,github:e.target.value})} />
    
                </div>  
                <div className='mb-3'>
                    <input type="text" className='form-control ' placeholder='Website Link' value={projectDetails.website} onChange={e=>setProjectDetails({...projectDetails,website:e.target.value})} />
    
                </div>    
                 
                 
               </div>
               <div className='mb-3'>
                    <input type="text" className='form-control ' placeholder='Project Overview' value={projectDetails.overview} onChange={e=>setProjectDetails({...projectDetails,overview:e.target.value})} />
    
                </div> 
            </div>

            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary" onClick={hadleAdd}>Add </Button>
            </Modal.Footer>
          </Modal>
          <ToastContainer position='top-right'  autoClose={2000} theme='colored' />
   </div>
  )
}

export default AddProject