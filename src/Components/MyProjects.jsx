import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";
import AddProject from './AddProject'
import { userProjectAPI } from '../Services/allAPI'
import Projects from '../Pages/Projects';



function MyProjects() {
    const [userProjects,setUserProjects]=useState([])
    const getUserProjects=async()=>{
        if(sessionStorage.getItem("token")){
            const token = sessionStorage.getItem("token")
            const reqHeader={
                "Content-Type":"application/json","Authorization":`Bearer ${token}`
              }
        const result = await userProjectAPI(reqHeader)
        if(result.status===200){
            setUserProjects(result.data)
        }else{
            console.log(result);
            toast.warning(result.response.data)
        }
    }
    }
    useEffect(()=>{
        getUserProjects()
    },[])
  return (
    <div className='card shadow p-2 mb-3 '>
        <div className='d-flex'>
            <h3>My Projects</h3>
            <div className='ms-auto'> <AddProject /></div>
        </div>
        <div className='mt-5'>
            {/* conllection of user projects */}
           {userProjects?.length>0?userProjects.map(Project=>(
            <div className='border d-flex align-items-center rounded p-2'>
                <h5>{Project?.title}</h5>
                <div  className='icon ms-auto'>
                   
                    <a><button className='btn '><i className="fa-solid fa-pen-to-square fa-2x" ></i></button></a>
                    <a href={`${Project.github}` } target='_blank' className='btn '><i className="fa-brands fa-github fa-2x"></i></a>
                    <button className='btn '><i className="fa-solid fa-trash fa-2x"></i></button>
                </div>
                
            </div>)):
            <p className='text-danger fw-bolder fs-5'> No Projects Uploaded yet</p>}
        </div>
        <ToastContainer position='top-right'  autoClose={2000} theme='colored' />
    </div>
  )
}

export default MyProjects