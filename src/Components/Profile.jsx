import React, { useEffect, useState } from 'react'
import { Collapse } from 'react-bootstrap'
import { BASE_URL } from '../Services/baseurl'
import { editProfileAPI } from '../Services/allAPI'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function Profile() {

    const [open, setOpen] = useState(false)
    const [userProfile, setUserProfile] = useState({
        username: "", email: "", password: "", profile: "", github: "", linkedin: ""
    })
    const [existingImage, setExistingImage] = useState("")
    const [preview, setPreview] = useState("")
    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem("existingUser"))
      
        setUserProfile({ ...userProfile, username: user.username, email: user.email, password: user.password, profile: "", github: user.github, linkedin: user.linkedin, id: user._id })
        setExistingImage(user.profile)
        
   

    }, [open])
    useEffect(() => {
        if (userProfile.profile) {
            setPreview(URL.createObjectURL(userProfile.profile))
        } else {
            setPreview("")
        }
    }, [userProfile.profile])



    /////////////////////////////////////////////////////////////
    const handleProfileUpdate = async () => {
        const { username, email, password, profile, github, linkedin } = userProfile
        if (!github || !linkedin) {
             alert("futill the form completely")
        } else {
            const reqBody = new FormData()
            reqBody.append("username", username)
            reqBody.append("email", email)
            reqBody.append("password", password)
             reqBody.append("github", github)
            reqBody.append("linkedin", linkedin)
            preview ? reqBody.append("profileImage", profile) : reqBody.append("profileImage", existingImage)
            const token = sessionStorage.getItem("token")
            if (preview) {
                const reqHeader = {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`
                }
                //api call
                const result = await editProfileAPI(reqBody, reqHeader)
                if (result.status === 200) {
                    setOpen(!open)
                    sessionStorage.setItem("existingUser",JSON.stringify(result.data))
                    
                } else {
                    setOpen(!open)
                    toast.error(result.response.data)

                }

            } else {
                const reqHeader = {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
                //api call
                const result = await editProfileAPI( reqBody, reqHeader)
                if (result.status === 200) {
                 
                    setOpen(!open)
                    sessionStorage.setItem("existingUser",JSON.stringify(result.data))
                 
                } else {
                    setOpen(!open)
                    toast.error(result.response.data)

                }
            }
        }
    }






    /////////////////////////////////////////////////

    return (
        <>
            <div className='card shadow p-5 mb-3'>
                <div className='d-flex justify-content-between '>
                    <h2>profile</h2>
                    <button onClick={() => setOpen(!open)} className="btn btn-outline-info"><i class="fa-solid fa-chevron-down fa-beat-fade"></i></button>
                </div>

                <Collapse in={open}>
                    <div className="row justify-content-centre mt-3">
                        <label className='text-center'>
                            <input id='profile' style={{ display: 'none' }} type="file" onChange={e => setUserProfile({ ...userProfile, profile: e.target.files[0] })} />
                            {existingImage !== "" ?
                                <img width={'200px'} height={'200px'} className='rounded-circle' src={preview ? preview : `${BASE_URL}/uploads/${existingImage}`} alt="upload picture" /> :

                                <img width={'200px'} height={'200px'} className='rounded-circle' src={preview ? preview : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1vNcnuDrDcWb-fg4zotZPU0uoCCsO7j_T2BKFxdo6qASgQXXtIwcIjgDPbT7AnO505KE&usqp=CAU`} alt="upload picture" />
                            }
                        </label>
                        <div className='mt-3'>
                            <input type="text" className='form-control' placeholder='GitHub' value={userProfile.github} onChange={e => setUserProfile({ ...userProfile, github: e.target.value })} />
                        </div>
                        <div className='mt-3' >
                            <input type="text" className='form-control' placeholder='LinkedIn' value={userProfile.linkedin} onChange={e => setUserProfile({ ...userProfile, linkedin: e.target.value })} />
                        </div>
                        <div className='mt-3 text-center d-grid' >
                            <button type="text" className='btn btn-warning' placeholder='LinkedIn' onClick={handleProfileUpdate}>Update</button>
                        </div>
                    </div>
                </Collapse>
            </div>
            <ToastContainer position='top-right'  autoClose={2000} theme='colored' />

        </>
    )
}

export default Profile