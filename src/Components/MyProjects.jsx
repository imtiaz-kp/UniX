import React from 'react'

import AddProject from './AddProject'


function MyProjects() {
  return (
    <div className='card shadow p-2 mb-3 '>
        <div className='d-flex'>
            <h3>My Projects</h3>
            <div className='ms-auto'> <AddProject /></div>
        </div>
        <div className='mt-5'>
            {/* conllection of user projects */}
            <div className='border d-flex align-items-center rounded p-2'>
                <h5>Project Title</h5>
                <div  className='icon ms-auto'>
                    <button className='btn '><i className="fa-solid fa-pen-to-square fa-2x"></i></button>
                    <button className='btn '><i className="fa-brands fa-github fa-2x"></i></button>
                    <button className='btn '><i className="fa-solid fa-trash fa-2x"></i></button>
                </div>
                
            </div>
            <p className='text-danger fw-bolder fs-5'> No Projects Uploaded yet</p>
        </div>
    </div>
  )
}

export default MyProjects