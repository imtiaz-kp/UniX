import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap'


function Profile() {
    const [open,setOpen]=useState(false)
    return (
        <>
            <div className='card shadow p-5 mb-3'>
                <div className='d-flex justify-content-between '>
                    <h2>profile</h2>
                 <button onClick={()=>setOpen(!open)} className="btn btn-outline-info"><i class="fa-solid fa-chevron-down fa-beat-fade"></i></button>
                </div>
                
           <Collapse in={open}>
                <div className="row justify-content-centre mt-3">
                    <label className='text-center'>
                        <input id='profile'  style={{display:'none'}} type="file" />
                        <img width={'200px'} height={'200px'} className='rounded-circle' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1vNcnuDrDcWb-fg4zotZPU0uoCCsO7j_T2BKFxdo6qASgQXXtIwcIjgDPbT7AnO505KE&usqp=CAU" alt="upload picture" />
                    </label>
                    <div className='mt-3'>
                        <input type="text" className='form-control' placeholder='GitHub' />
                    </div>
                    <div className='mt-3' >
                        <input type="text" className='form-control' placeholder='LinkedIn' />
                    </div>
                    <div className='mt-3 text-center d-grid' >
                        <button type="text" className='btn btn-warning' placeholder='LinkedIn' >Update</button>
                    </div>
                </div>
           </Collapse>
            </div>
           
        </>
    )
}

export default Profile